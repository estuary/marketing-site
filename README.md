# Marketing Site

The marketing site at https://estuary.dev

## 🚀 Quick Start

**Default (production Supabase data):**

```bash
yarn start
```

**Local seed data (8 sample connectors):**

```bash
yarn start:local
```

## 📋 Available Commands

**Development:**

```bash
yarn start          # Production Supabase data
yarn start:local    # Local seed data (7 sample connectors)
```

**Build:**

```bash
yarn build          # Production Supabase data
yarn build:local    # Local seed data
```

**Database:**

```bash
yarn db:start       # Start local database
yarn db:stop        # Stop local database
yarn db:reset       # Reset database (removes all data)
```

## 🔧 Local Development Setup

The local setup provides sample connector data without requiring production database credentials.

**Prerequisites:**

-   **Docker Desktop** must be installed and running (provides PostgreSQL in a container)
-   **Node.js** and **yarn** installed
-   **No need to install PostgreSQL locally** - Docker handles this

**What it creates:**

-   PostgreSQL 15 in Docker (port 7654)
-   Sample connectors matching production schema
-   Environment-based switching (`.env.local` overrides `.env` when needed)

## 📦 Traditional Setup (Production/Strapi)

Make sure Node and yarn are installed, then:

```bash
yarn install
yarn start
```

The site will be available at [localhost:8000](http://localhost:8000).

### Environment Variables

Copy the `.env.example` file and create your own `.env`.

For Strapi integration, you need:

-   **`STRAPI_API_URL_DEV`**: The development API URL for Strapi.
-   **`STRAPI_TOKEN_DEV`**: The development access token for Strapi.

#### Getting Strapi Tokens

To get your Strapi development token:

1. **Access Strapi Admin**: Go to the Strapi admin panel
2. **Navigate to API Tokens**: Settings → API Tokens → Create new API Token
3. **Configure Token**:
    - **Name**: `Marketing Site Dev` (or similar)
    - **Token duration**: `Unlimited` (recommended for development)
    - **Token type**: `Read-only` (sufficient for marketing site)
4. **Copy Token**: Save the generated token immediately (it won't be shown again)
5. **Add to `.env`**: Set `STRAPI_TOKEN_DEV=your_token_here`

Check with the team for other required variables.

## 🛠️ Troubleshooting

### I am seeing old UI content

```bash
yarn clean
```

This clears the cache. Your next `start` will take extra time but show fresh content.

### Database won't start

1. **Install Docker Desktop** if not installed: https://docker.com/products/docker-desktop
2. **Make sure Docker is running** (Docker Desktop should be started)
3. Check if port 7654 is busy: `lsof -i :7654`
4. Reset database: `docker-compose -f docker-compose.local.yml down -v`

### Site won't build locally

-   Restart database: `docker-compose -f docker-compose.local.yml restart`
-   Clean and rebuild: `yarn clean && yarn start:local`

### Need to reset everything

```bash
docker-compose -f docker-compose.local.yml down -v
yarn start:local
```

# Stuff we use
