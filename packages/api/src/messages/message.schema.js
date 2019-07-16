const { model, Schema } = require('../shared/connection');

const messageSchema = new Schema({
  title: String,
  message: String,
});

const messageModel = model('Message', messageSchema);

module.exports = messageModel;
