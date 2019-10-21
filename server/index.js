const express = require('express');

const app = express();
const port = 3003;
const db = require('../database/index.js');

let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
 }

 app.use(allowCrossDomain);
 app.use(express.static('public'));

app.get('/api/images/:productId', (req, res) => {
  const { productId } = req.params;
  console.log('proid: ', productId);

  db.findOne({ productId: productId }, (err, results) => {
    if (err || !results || results.length === 0) {
      console.log('Error finding shirt', err);
      res.sendStatus(404);
    } else {
      console.log('results: ', results);
      res.send(results.imageURLs);
    }
  });
});

app.listen(port, () => console.log(`Images Server listening on ${port}`));