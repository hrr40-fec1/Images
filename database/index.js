const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shirts', { useNewUrlParser: true });

const  shirtSchema = mongoose.Schema({
  productId: Number,
  imageURLs: [String]
});

const Shirts = mongoose.model('Shirts', shirtSchema);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Server connected to db');
});

module.exports = Shirts;
