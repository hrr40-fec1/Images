const Shirts = require('./index.js');
const imageUrls = require('./urls');
const seedrandom = require('seedrandom');

Shirts.deleteMany({}, (err, result) => {
  err && console.log('There was a problem removing items from Shirts:', err);
  result && console.log('urls: ', result);
});

const shirts = [];

for ( let i = 1; i <= 100; i += 1) {
  shirts.push({
    productId: i,
    imageURLs: [],
  });
}

for (let url of imageUrls) {
  const shirtIndex = Math.floor(seedrandom(url)() * 100);
  shirts[shirtIndex].imageURLs.push(encodeURI(url));
}

Shirts.insertMany(shirts, (err, result) => {
  err && console.log('Error insterting shirts: ', err);
  result && console.log('Inserted:', result);
});
