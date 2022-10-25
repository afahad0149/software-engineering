const mutationResolver = {
  toggleWishListItem: async (_, { id }, { toggleWishlist }) => toggleWishlist(id)
};

module.exports = mutationResolver;
