import express from 'express';
import knex from 'knex';

const app = express();

console.log('before knex instantiation I think');

const knexInstance = knex({
  client: 'pg',
  connection: {
    host: 'database-1.cbswyei8e50w.us-west-2.rds.amazonaws.com',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'ass',
    ssl: false
  }
});

console.log('after knex instantiation');

app.get('/', (req, res) => {
  res.end('Hello World');
});

app.get('/fuck', async (req, res) => {
  console.log('before query');

  try {
    await knexInstance.raw('SELECT 1');
  } catch (e) {
    console.error(e);
    throw e;
  }

  console.log('after query');

});

app.get('/error', (req, res) => {
  throw new Error('Error!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
