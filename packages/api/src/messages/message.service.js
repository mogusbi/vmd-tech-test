const Message = require('./message.schema');

exports.createMessage = async input => {
  const { title, message } = input;
  const result = new Message({
    title,
    message,
  });

  return result.save();
};

exports.readMessage = async id => Message.findById(id);

exports.listMessages = async (skip = 0, limit = 10) =>
  Message.find({})
    .skip(skip)
    .limit(limit);
