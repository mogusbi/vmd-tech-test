const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/vmd', {
  useNewUrlParser: true,
});

module.exports = mongoose;
