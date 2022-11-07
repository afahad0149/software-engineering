const router = require('express').Router();
const pokemonController = require('./controllers/pokemon.controller');
const typesController = require('./controllers/types.controller');
const movesController = require('./controllers/moves.controller');
const wishlistController = require('./controllers/wishlist.controller');

router.get('/pokemon', pokemonController.getAllPokemon);
router.get('/pokemon/:id', pokemonController.getPokemonById);
router.get('/pokemon/type/:id', pokemonController.getPokemonByType);

router.get('/pokemon/:id', pokemonController.getPokemonById);

router.get('/types', typesController.getAllTypes);
router.get('/types/:id', typesController.getTypeById);

router.get('/moves/:id', movesController.getMoveById);

router.get('/wishlist', wishlistController.getWishList);
router.post('/wishlist', wishlistController.toggleWishlist);

router.get('/*', (_, res) => {
  res.status(404).send('Requested resource not found\n');
});

module.exports = router;
