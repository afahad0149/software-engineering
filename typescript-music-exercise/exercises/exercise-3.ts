
/*
We can use TypeScript to describe more complex objects and arrays too. Just
like in JavaScript we can nest objects within other objects, in TypeScript
we can nest types inside each other to describe the structure of our data.

We can join types together in other ways too.
*/

// 1. In our music app, artists have songs. Using the shape of
//    the data given as a guide in data.json create a Song type.

// 2. Now use that type to create an ArtistWithSongs type.
//    See if you can reuse the Artist type from exercise 2,
//    to keep your code nice and DRY.

// 3. We want to display statistics about an artist in our
//    application. Write a function called getNumberOfSongs
//    that will return the number of songs an artist has.

// 4. Now write a function called getNumberOfLongSongs that will count
//    the number of long songs an artist has. We’ll define a long song
//    as one that is at least 5 minutes long. You might be able to use
//    a function you wrote in a previous exercise to help.

// 5. Write a function called getArtistWithMostSongs to find the artist with
//    the most songs. TypeScript can really help when dealing with deeply
//    nested properties and manipulating complex objects and arrays.

export {
  getNumberOfSongs,
  getNumberOfLongSongs,
  getArtistWithMostSongs,
};
