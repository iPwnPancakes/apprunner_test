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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function example() {
  console.log('Start sleep');

  await sleep(3000);

  throw new Error('holy shmoley');
}

example();
