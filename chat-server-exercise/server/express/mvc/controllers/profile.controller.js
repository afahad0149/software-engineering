const profileModel = require("../models/profile.model");
const profileView = require("../views/profile.view");

const getProfile = (req, res) => {
  const { name } = req.params;
  // const name = req.params.name

  const userData = profileModel.findUserByName(name);

  // const html = profileView.profile(userData);
  res.send(userData);
};

const postProfile = (req, res) => {
  // some stuff
};

module.exports = { getProfile, postProfile };
