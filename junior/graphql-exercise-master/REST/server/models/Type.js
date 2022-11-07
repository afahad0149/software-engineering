const db = require('../db.js');

async function getAllTypes () {
  const data = await db;
  return data.types;
}

async function getTypeById (id) {
  const data = await db;
  return data.types.find(type => {
    return type.id == id;
  });
}


module.exports = { getAllTypes, getTypeById };
