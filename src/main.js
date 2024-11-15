import express from 'express';
import knex from 'knex';

const app = express();

const knexInstance = knex({
  client: 'pg',
  connection: {
    host: 'database-1.cbswyei8e50w.us-west-2.rds.amazonaws.com',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'eatmyass',
    ssl: { rejectUnauthorized: false }
  }
});

app.get('/', (req, res) => {
  res.end('Hello World');
});

app.get('/fuck', async (req, res) => {
  console.log('before query');
  const results = await knexInstance.select('*').from('ass');
  console.log(results);
  console.log('after query');

  res.send('woooo').status(200);
});

app.get('/error', (req, res) => {
  throw new Error('Error!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
