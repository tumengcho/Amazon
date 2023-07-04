import express from 'express';
import data from './data.js';

const app = express();

app.get('/api/burgers', (req, res) => {
  res.send(data.products);
});

app.get('/api/burgers/slug/:slug', (req, res) => {
  const burger = data.products.find((x) => x.slug === req.params.slug);
  if (burger) {
    res.send(burger);
  } else {
    res.status(404).send({ message: 'Product not Found' });
  }
});
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
