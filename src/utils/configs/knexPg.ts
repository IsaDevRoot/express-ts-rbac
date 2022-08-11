import knex from 'knex';

const connection = knex({
    client: 'pg',
    connection: {
      host : process.env.PG_HOST ?? 'localhost',
      port : Number(process.env.PG_PORT) ?? 5432,
      user : process.env.PG_USER ?? 'postgres',
      password : process.env.PG_PASSWORD ?? 'postgres',
      database : process.env.PG_DB ?? 'rbac'
    }
});

export default connection;