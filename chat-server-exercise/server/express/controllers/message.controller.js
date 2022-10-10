const messageModel = require("../models/message.model");

const getMessages = (req, res) => {
  const messages = messageModel.findMessages();

  res.status(200);
  res.send(messages);
};

const postMessage = (req, res) => {
  const newMessage = req.body;

  messageModel.saveMessage(newMessage);
  res.status(201);
  res.send("ok");
};

module.exports = { getMessages, postMessage };
