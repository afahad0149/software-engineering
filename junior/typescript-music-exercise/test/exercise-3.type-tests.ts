import { IsTypeEqual, typeAssert } from './utils';
import {
  getArtistWithMostSongs,
  getNumberOfLongSongs,
  getNumberOfSongs,
} from '../exercises/exercise-3';
import { madonnaWithSongs, metallicaWithSongs } from './mocks';

type ArtistWithSongs = typeof metallicaWithSongs | typeof madonnaWithSongs;

typeAssert<
  IsTypeEqual<(artist: ArtistWithSongs) => number, typeof getNumberOfSongs>
>();

typeAssert<
  IsTypeEqual<(artist: ArtistWithSongs) => number, typeof getNumberOfLongSongs>
>();

typeAssert<
  IsTypeEqual<(artists: ArtistWithSongs[]) => ArtistWithSongs, typeof getArtistWithMostSongs>
>();
