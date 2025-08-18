if (process.env.GATSBY_USE_LOCAL_DB === 'true') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('dotenv').config({ path: '.env.local' });
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('dotenv').config({ path: '.env' });
} else {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('dotenv').config({ path: '.env' });
}

const isLocalDevelopment = process.env.GATSBY_USE_LOCAL_DB === 'true';

const connectionParams = isLocalDevelopment ? '' : '?pgbouncer=true';

export const SUPABASE_CONNECTION_STRING = `postgres://${process.env.GATSBY_DB_USER}:${process.env.GATSBY_DB_PASS}@${process.env.GATSBY_DB_HOST}:${process.env.GATSBY_DB_PORT}/${process.env.GATSBY_DB_NAME}${connectionParams}`;
