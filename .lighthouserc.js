require('dotenv').config();

module.exports = {
    ci: {
        collect: {
            // staticDistDir: "public",
            preset: 'lighthouse:recommended',
            startServerCommand: 'npm run serve',
            url: [
                'http://localhost:9000',
                'http://localhost:9000/404.html',
                'http://localhost:9000/product/index.html',
                'http://localhost:9000/about/index.html',
                'http://localhost:9000/contact-us/index.html',
                'http://localhost:9000/pricing/index.html',
                'http://localhost:9000/integrations/index.html',
                'http://localhost:9000/source/postgres/index.html',
                'http://localhost:9000/integrations/postgres-to-elasticsearch/index.html',
                'http://localhost:9000/estuary-vs-fivetran/index.html',
                'http://localhost:9000/blog/index.html',
                'http://localhost:9000/chatgpt-for-sales/index.html',
                'http://localhost:9000/customers/connectngo/index.html',
            ],
        },
        upload: {
            target: 'lhci',
            serverBaseUrl:
                'https://lighthouse-ci-server-4hggwv2wra-uc.a.run.app',
            token: process.env.LHCI_TOKEN,
            githubAppToken: process.env.LHCI_GITHUB_APP_TOKEN,
            basicAuth: {
                username: process.env.LHCI_BASIC_AUTH_USERNAME,
                password: process.env.LHCI_BASIC_AUTH_PASSWORD,
            },
        },
    },
};
