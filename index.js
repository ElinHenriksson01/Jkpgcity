const express = require('express')
const app = express()

const stores = require('./stores.json');

app.get('/', function (req, res) {
  res.json(stores)
})

app.listen(3000, () => {
    console.log(`Server is running at port 3000`);
})