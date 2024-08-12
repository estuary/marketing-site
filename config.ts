// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
    path: '.env',
});

export const SUPABASE_CONNECTION_STRING = `postgres://${process.env.GATSBY_DB_USER}:${process.env.GATSBY_DB_PASS}@${process.env.GATSBY_DB_HOST}:${process.env.GATSBY_DB_PORT}/${process.env.GATSBY_DB_NAME}?pgbouncer=true`;
