'use strict';

const message = require('../models/message');

exports.getMessages = (req, res) => {
  try {
    const msgs = message.getAll();
    res.status(200);
    res.send(msgs);
  } catch (e) {
    console.log('e', e); // eslint-disable-line no-console
    res.sendStatus(500);
  }
}; 

exports.postMessage = (req, res) => {
  try {
    message.postOne(req.body);
    res.status(201); 
    res.send();
  } catch (e) {
    console.log('e', e); // eslint-disable-line no-console
    res.sendStatus(500);
  }
};
