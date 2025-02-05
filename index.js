const express = require('express');
const app = express();
const port = 3000;
// const routes = require('./routes/routes');
// const { logger } = require('./middleware/middleware');

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

// app.use(logger)
// app.use(validateGolfer)

app.get('/', (req, res) => {
  res.render('scorecard')
})

// routes
// app.use(routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})