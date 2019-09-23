// Update with your config settings.

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/guidr',
        useNullAsDefault: true,
        migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds'
        }
    },
    production: {
        client: 'pg',
        connection: process.env.DATABASE_URL,
        useNullAsDefault: true,
        migrations: {
            directory: './database/migrations'
        },
        seeds: {
            directory: './database/seeds'
        }
    }
};
