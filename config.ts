// Load local environment variables first (higher priority)
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
    path: '.env.local',
});

// Then load production environment variables (lower priority)
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
    path: '.env',
});

const isLocalDevelopment =
    process.env.NODE_ENV === 'development' &&
    process.env.GATSBY_DB_HOST === 'localhost';

// For local development, don't use pgbouncer
const connectionParams = isLocalDevelopment ? '' : '?pgbouncer=true';

export const SUPABASE_CONNECTION_STRING = `postgres://${process.env.GATSBY_DB_USER}:${process.env.GATSBY_DB_PASS}@${process.env.GATSBY_DB_HOST}:${process.env.GATSBY_DB_PORT}/${process.env.GATSBY_DB_NAME}${connectionParams}`;
