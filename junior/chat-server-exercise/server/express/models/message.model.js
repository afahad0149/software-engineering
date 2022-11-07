const db = require("../db");

const findMessages = () => {
  return db.msgs;
};

const saveMessage = (newMessage) => {
  db.msgs.push(newMessage);
};

module.exports = { findMessages, saveMessage };
