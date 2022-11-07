const Wishlist = require('../models/Wishlist');

async function toggleWishlist (req, res) {
  try {
    const data = await Wishlist.toggleWishlist(req.body.id);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

async function getWishList (req, res) {
  try {
    const data = await Wishlist.getWishList();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
}

module.exports = { toggleWishlist, getWishList };
