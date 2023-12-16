import type { Knex } from "knex";

require('dotenv').config();
// Update with your config settings.


interface IKnexConfig {
  [key: string]: Knex.Config & {
    ssl?: {
      sslmode: string;
      sslca?: string;
      sslkey?: string;
      sslcert?: string;
    };
  };
}

const config: IKnexConfig = {
  development: {
    client: "pg",
    connection: {
      connectionString: process.env.POSTGRES_URL,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      host: process.env.POSTGRES_HOST,
      ssl: { rejectUnauthorized: false},

    },

    migrations: {
      directory: "./db/migrations",
    },
    pool: {
      min: 2,
      max: 10,
    },
  },

};

export default config;
