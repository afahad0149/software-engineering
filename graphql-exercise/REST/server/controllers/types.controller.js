const Type = require('../models/Type');

async function getAllTypes (req, res) {
  try {
    const type = await Type.getAllTypes(req.params.id);
    res.json(type);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getTypeById (req, res) {
  try {
    const type = await Type.getTypeById(req.params.id);
    res.json(type);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

module.exports = { getAllTypes, getTypeById };
