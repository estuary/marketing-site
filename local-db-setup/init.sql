-- Create PostGraphile extensions and setup
-- These are needed for PostGraphile to work properly with custom scalar types

-- Enable PostGraphile extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create Flow ID type (this is what PostGraphile_Flowid maps to)
-- Flow IDs are represented as MAC addresses in the format XX:XX:XX:XX:XX:XX:XX:XX
CREATE DOMAIN flowid AS TEXT
CHECK (VALUE ~ '^[0-9a-f]{2}(:[0-9a-f]{2}){7}$');

-- Create the connectors table based on the structure used in the marketing site
-- This matches the fields used in the GraphQL queries and normalizeConnector function

CREATE TABLE public.connectors (
    id flowid PRIMARY KEY,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW(),
    detail TEXT,
    external_url TEXT,
    image_name TEXT NOT NULL,
    short_description JSONB,
    long_description JSONB,
    title JSONB NOT NULL,
    logo_url JSONB NOT NULL,
    recommended BOOLEAN DEFAULT FALSE,
    -- Index field for ordering
    idx INTEGER DEFAULT 0
);

-- Create the connector_tags table for protocol information
CREATE TABLE public.connector_tags (
    id SERIAL PRIMARY KEY,
    connector_id flowid REFERENCES public.connectors(id) ON DELETE CASCADE,
    protocol VARCHAR NOT NULL
);

-- Create indexes for better performance (matching production Supabase patterns)
CREATE INDEX idx_connectors_recommended ON public.connectors(recommended DESC, created_at DESC);
CREATE INDEX idx_connectors_created_at ON public.connectors(created_at DESC);
CREATE INDEX idx_connectors_image_name ON public.connectors(image_name);
CREATE INDEX idx_connector_tags_connector_id ON public.connector_tags(connector_id);
CREATE INDEX idx_connector_tags_protocol ON public.connector_tags(protocol);

-- Grant permissions for PostGraphile
GRANT SELECT ON public.connectors TO PUBLIC;
GRANT SELECT ON public.connector_tags TO PUBLIC;

-- Add comments for documentation
COMMENT ON TABLE public.connectors IS 'Estuary Flow connectors for local development';
COMMENT ON TABLE public.connector_tags IS 'Protocol tags for connectors (capture/materialization)';
COMMENT ON COLUMN public.connectors.id IS 'Flow ID in MAC address format';
COMMENT ON COLUMN public.connectors.logo_url IS 'Logo URL (supports data URIs for local dev)';
COMMENT ON COLUMN public.connector_tags.protocol IS 'Either "capture" or "materialization"';

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_connectors_updated_at 
    BEFORE UPDATE ON public.connectors 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Grant necessary permissions
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO estuary_dev;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO estuary_dev;
