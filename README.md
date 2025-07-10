# Marketing Site

The marketing site at https://estuary.dev

# How to install?

Make sure Node and yarn are installed.

Run: `yarn install`

## Troubleshooting

### I am seeing old UI content

Run: `yarn clean`

This will clear out the cache that is populated during build. This will mean your next `start` will take extra time.

# How to start/run?

Run: `yarn start`

### Environment Variables

Copy the `.env.example` file and create your own `.env`.

To run the marketing site with Strapi both locally, you need these two variables:

-   **`STRAPI_API_URL_DEV`**: The development API URL for Strapi.
-   **`STRAPI_TOKEN_DEV`**: The development access token for Strapi.

You can get the **`STRAPI_API_URL_DEV`** by running your Strapi instance locally (it's typically `http://localhost:1337`). For the **`STRAPI_TOKEN_DEV`**, generate it within the Strapi admin panel under **Settings > API Tokens**.

Check with the team for the other variables the project requires.

# Stuff we use
