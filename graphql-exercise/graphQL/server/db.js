const moves = require('./data/moves.json');
const pokemon = require('./data/pokemon.json');
const types = require('./data/types.json');
const { wishlist } = require('./data/wishlist.json');
const fs = require('fs/promises');

const promise_db = new Promise((resolve, reject) => {
  try {
    const db = { moves, pokemon, types, wishlist };
    db.toggleWishlist = async (id) => {
      let action = '';
      let file =  await fs.readFile(__dirname + '/data/wishlist.json');
      const data = JSON.parse(file);
      if (!data.wishlist[id]) {
        data.wishlist[id] = true;
        action = 'added';
      } else {
        delete data.wishlist[id];
        action = 'deleted';
      }
      await fs.writeFile(__dirname + '/data/wishlist.json', JSON.stringify(data, null, 2));
      return { action };
    };
    resolve(db);
  } catch (err) {
    reject(err);
  }
});

module.exports = promise_db;
