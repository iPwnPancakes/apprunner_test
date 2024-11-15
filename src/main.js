import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.end('Hello World');
});

app.get('/error', (req, res) => {
  throw new Error('Error!');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
