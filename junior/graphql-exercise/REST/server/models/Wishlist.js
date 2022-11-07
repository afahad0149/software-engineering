const db = require('../db.js');

async function toggleWishlist (id) {
  const data = await db;
  return data.toggleWishlist(id);
}

async function getWishList () {
  const data = await db;
  return data.wishlist;
}


module.exports = { toggleWishlist, getWishList };
