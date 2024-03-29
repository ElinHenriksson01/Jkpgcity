const express = require('express')
const app = express()

const stores = require('./stores.json');

app.get('/', function (req, res) {
    const {storename} = req.query;
    console.log(storename);
    const index = stores.findIndex(store => store.name === storename);
    if (index > -1) {
        res.json(stores[index])
    } else {
        res.send('store not found!')
}
})


app.delete('/', function (req, res) {
    const {storename} = req.query;
    console.log(storename);
    const index = stores.findIndex(store => store.name === storename);
    if (index > -1) {
        stores.splice(index, 1)
        res.send(`store found! Deleting store with index: ${index}`) 
    } else {
        res.send('store not found!')
    }
  })


app.post('/', 
    express.json(),
    (req, res) => {
    const {body} = req;
    console.log(body);
    res.send('store added!')
  })

app.listen(3000, () => {
    console.log(`Server is running at port 3000`);
})