/*
As you’ve seen, TypeScript can infer many things about your code. It can 
tell you when you’ve used the wrong argument types, or if your function
return type doesn’t match the variable type you’re trying to assign it to.

However, TypeScript’s ability to do this stops at the edges of your code.
If you try to fetch data across the network, TypeScript has no idea what 
types the data may have. So you have to tell it.

Notice that for this file, when you successfully run 'npm run test:4', you
don’t see a ’PASS’ message. Instead, you will know that your function types
are correct when the console shows no error message after running that 
test command.
*/

// 1. We have provided an API for you at https://cw-music-api.herokuapp.com/
//    Inspect the data returned from the /artists endpoint.
//    Write a function called fetchArtists that uses fetch to return data 
//    from that endpoint. Make sure the return value is properly typed, and 
//    not just ’any’.
//    Note: we have provided the fetch function from node-fetch at the top 
//    of this file. Feel free to uninstall node-fetch and use fetch directly
//    if your version of node supports it (v17.5 and above).

// 2. We want to display artists and their albums. Unfortunately that
//    data is on different endpoints. Write a function called
//    fetchArtistsWithAlbums that combines data from the /artists
//    and /albums endpoints to return artists with an embedded
//    array of albums. Create a type for them called ArtistWithAlbums.

// 3. Try to refactor your code so there is no duplication with the
//    fetchArtists function.

import fetch from 'node-fetch';
import { ArtistWithSongs } from './exercise-3';

const apiBaseUrl = 'https://cw-music-api.herokuapp.com';

async function apiClient<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${apiBaseUrl}/${endpoint}`);
  if (response.ok) {
    return response.json() as unknown as T;
  }
  return Promise.reject(new Error('something went wrong'));
}

function fetchArtists(): Promise<ArtistWithSongs[]> {
  return apiClient<ArtistWithSongs[]>('artists');
}

console.log(fetchArtists());

type Album = {
  artist: string;
  title: string;
  released: number;
};

type ArtistWithAlbums = ArtistWithSongs & { albums: Album[]; };

async function fetchArtistsWithAlbums(): Promise<ArtistWithAlbums[]> {
  const artists = await fetchArtists();
  const albums = await apiClient<Album[]>('albums');
  return artists.map((artist) => ({
    ...artist,
    albums: albums.filter((album) => album.artist === artist.name)
  }));
}

export { fetchArtists, fetchArtistsWithAlbums };
