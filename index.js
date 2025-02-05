const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const routes = require('./routes/routes')


mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('scorecard')
})

// routes
app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})