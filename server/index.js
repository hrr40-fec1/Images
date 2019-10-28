const express = require('express');
const app = express();
const port = 3003;
const db = require('../database/index.js');

const allowCrossDomain = function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

app.use(allowCrossDomain);
app.use(express.static('public'));

app.get('/api/images/:productId', (req, res) => {
  const { productId } = req.params;

  db.findOne({ productId }, (err, results) => {
    if (err || !results || results.length === 0) {
      res.sendStatus(404);
    } else {
      res.send(results.imageURLs.slice(0, 5));
    }
  });
});

/* server =  */app.listen(port, () => console.log(`Images Server listening on ${port}`));
// let server;
// const start = () => {
//   server = app.listen(port, () => {
//     // eslint-disable-next-line no-console
//     console.log(`Images Server listening on ${port}`);
//   });
// };
// const close = server ? server.close : () => {};

// module.exports = {
//   start,
//   close,
// };
