-- Seed data for connectors table

INSERT INTO public.connectors (
    id, 
    created_at, 
    detail, 
    external_url, 
    image_name, 
    short_description, 
    title, 
    logo_url, 
    recommended, 
    long_description,
    idx
) VALUES 
-- Hello World connector
(
    '05:f3:63:e5:a8:80:04:00',
    '2022-04-28 03:28:13.61722+00',
    'A flood of real-time greetings',
    'https://github.com/estuary/connectors/tree/main/source-hello-world',
    'ghcr.io/estuary/source-hello-world',
    '{"en-US": "Connectors for capturing data from external data sources -- connectors/source-hello-world at main · estuary/connectors"}',
    '{"en-US": "Hello World"}',
    '{"en-US": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiBmaWxsPSIjNGY4NmY3Ii8+PHRleHQgeD0iMjYuNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhXPC90ZXh0Pjwvc3ZnPg=="}',
    false,
    null,
    0
),

-- PostgreSQL Source
(
    '01:23:45:67:89:ab:cd:ef',
    '2022-01-15 10:00:00+00',
    'Real-time data capture from PostgreSQL databases',
    'https://github.com/estuary/connectors/tree/main/source-postgres',
    'ghcr.io/estuary/source-postgres',
    '{"en-US": "Capture real-time data changes from PostgreSQL databases using logical replication"}',
    '{"en-US": "PostgreSQL"}',
    '{"en-US": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiBmaWxsPSIjMzM2NzkxIi8+PHRleHQgeD0iMjYuNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlBHPC90ZXh0Pjwvc3ZnPg=="}',
    true,
    '{"en-US": "The PostgreSQL source connector captures real-time data changes from PostgreSQL databases using logical replication. It supports both full table snapshots and incremental change data capture (CDC) to keep your data warehouse or analytics platform synchronized with your operational database."}',
    1
),

-- MySQL Source
(
    '02:34:56:78:9a:bc:de:f0',
    '2022-01-20 10:00:00+00',
    'Real-time data capture from MySQL databases',
    'https://github.com/estuary/connectors/tree/main/source-mysql',
    'ghcr.io/estuary/source-mysql',
    '{"en-US": "Capture real-time data changes from MySQL databases using binary log replication"}',
    '{"en-US": "MySQL"}',
    '{"en-US": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiBmaWxsPSIjMDA3OGQ3Ii8+PHRleHQgeD0iMjYuNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1ZPC90ZXh0Pjwvc3ZnPg=="}',
    true,
    '{"en-US": "The MySQL source connector captures real-time data changes from MySQL databases using binary log replication. It supports both full table snapshots and incremental change data capture to keep your data synchronized."}',
    2
),

-- BigQuery Destination
(
    '04:56:78:9a:bc:de:f0:12',
    '2022-02-10 10:00:00+00',
    'Stream data to Google BigQuery data warehouse',
    'https://github.com/estuary/connectors/tree/main/materialize-bigquery',
    'ghcr.io/estuary/materialize-bigquery',
    '{"en-US": "Stream real-time data to Google BigQuery for analytics and data warehousing"}',
    '{"en-US": "BigQuery"}',
    '{"en-US": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiBmaWxsPSIjNDA5NmZmIi8+PHRleHQgeD0iMjYuNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkJRPC90ZXh0Pjwvc3ZnPg=="}',
    true,
    '{"en-US": "The BigQuery materialization connector streams real-time data to Google BigQuery, providing a scalable data warehouse solution for analytics and business intelligence workloads."}',
    4
),

-- Snowflake Destination
(
    '05:67:89:ab:cd:ef:01:23',
    '2022-02-15 10:00:00+00',
    'Stream data to Snowflake data warehouse',
    'https://github.com/estuary/connectors/tree/main/materialize-snowflake',
    'ghcr.io/estuary/materialize-snowflake',
    '{"en-US": "Stream real-time data to Snowflake for analytics and data warehousing"}',
    '{"en-US": "Snowflake"}',
    '{"en-US": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiBmaWxsPSIjMjlhOGZmIi8+PHRleHQgeD0iMjYuNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPlNGPC90ZXh0Pjwvc3ZnPg=="}',
    true,
    '{"en-US": "The Snowflake materialization connector streams real-time data to Snowflake, providing a powerful cloud data warehouse solution for modern analytics and data science workloads."}',
    5
),

-- MongoDB Source
(
    '07:89:ab:cd:ef:01:23:45',
    '2022-03-10 10:00:00+00',
    'Real-time data capture from MongoDB databases',
    'https://github.com/estuary/connectors/tree/main/source-mongodb',
    'ghcr.io/estuary/source-mongodb',
    '{"en-US": "Capture real-time data changes from MongoDB databases using change streams"}',
    '{"en-US": "MongoDB"}',
    '{"en-US": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTMiIGhlaWdodD0iNTMiIHZpZXdCb3g9IjAgMCA1MyA1MyIgZmlsbD0ibm9uZSI+PHJlY3Qgd2lkdGg9IjUzIiBoZWlnaHQ9IjUzIiBmaWxsPSIjNDdiMjQ4Ii8+PHRleHQgeD0iMjYuNSIgeT0iMzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk1EPC90ZXh0Pjwvc3ZnPg=="}',
    false,
    '{"en-US": "The MongoDB source connector captures real-time data changes from MongoDB databases using change streams, supporting both full collection snapshots and incremental updates."}',
    7
);

-- Insert connector tags (protocols)
INSERT INTO public.connector_tags (connector_id, protocol) VALUES
-- Hello World (capture)
('05:f3:63:e5:a8:80:04:00', 'capture'),

-- PostgreSQL (capture)
('01:23:45:67:89:ab:cd:ef', 'capture'),

-- MySQL (capture)
('02:34:56:78:9a:bc:de:f0', 'capture'),

-- BigQuery (materialization)
('04:56:78:9a:bc:de:f0:12', 'materialization'),

-- Snowflake (materialization)
('05:67:89:ab:cd:ef:01:23', 'materialization'),

-- MongoDB (capture)
('07:89:ab:cd:ef:01:23:45', 'capture');

-- Update sequence values to avoid conflicts
SELECT setval('connector_tags_id_seq', (SELECT MAX(id) FROM connector_tags));
