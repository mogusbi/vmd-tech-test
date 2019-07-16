const {
  createMessage,
  listMessages,
  readMessage,
} = require('./message.service');

exports.create = async (req, res) => {
  try {
    const { title, message } = req.body;
    const result = await createMessage({
      title,
      message,
    });

    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
};

exports.list = async (req, res) => {
  try {
    const { skip, limit } = req.query;
    const result = await listMessages(skip, limit);

    if (result) {
      res.json({
        items: result,
      });
    } else {
      res.status(204);
    }
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
};

exports.read = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await readMessage(id);

    if (result) {
      res.json(result);
    } else {
      res.status(404).json({
        error: 'Message not found',
      });
    }
  } catch (e) {
    res.status(400).json({
      error: e.message,
    });
  }
};
