'use strict';

const eventModel = require("../models/event.model");

const getEvents = async (req, res) => {
  res.set('Access-Control-Allow-Origin', process.env.CLIENT_URL);
  const eventData = await eventModel.getAll();
  res.send(JSON.stringify(eventData));
};

const insertEvent = async (req, res) => {
  console.log('hello')
  const msg = req.body;
  console.log(msg)
  try{
    await eventModel.set(msg);
    res.status(200)
  }catch(err){
    console.log(err)
    res.status(500)
  }
};

module.exports = { getEvents, insertEvent };