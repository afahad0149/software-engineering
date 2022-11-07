export const pulp = { name: 'Pulp', genre: 'indie', formed: 1978, members: 6 };

export const boyGeorge = { name: 'Boy George', genre: 'pop', born: 1961 };

export const metallicaWithSongs = {
  name: 'Metallica',
  genre: 'thrash metal',
  formed: 1981,
  members: 4,
  songs: [
    {
      title: 'One',
      durationSeconds: 534,
    },
    { title: 'Fight Fire with Fire', durationSeconds: 300 },
    {
      title: 'Enter Sandman',
      durationSeconds: 421,
    },
  ],
};

export const ironMaidenWithSongs = {
  name: 'Iron Maiden',
  members: 6,
  genre: 'heavy metal',
  formed: 1975,
  songs: [
    { title: 'Run To The Hills', durationSeconds: 230 },
    {
      title: 'Hallowed Be Thy Name',
      durationSeconds: 532,
    },
  ],
};

export const madonnaWithSongs = {
  name: 'Madonna',
  genre: 'pop',
  born: 1958,
  songs: [{ title: 'Express Yourself', durationSeconds: 279 }],
};

export const madonnaWithSongsAndAlbums = {
  ...madonnaWithSongs,
  albums: [
    {
      artist: 'Madonna',
      title: 'Like a prayer',
      released: 1989
    }
  ]
};

export const metallicaWithSongsAndAlbums = {
  ...metallicaWithSongs,
  albums: [
    {
      artist: 'Metallica',
      title: 'Master of Puppets',
      released: 1986,
    },
    {
      artist: 'Metallica',
      title: '...And Justice For All',
      released: 1988,
    }
  ]
};
