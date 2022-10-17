import { IsTypeEqual, typeAssert } from './utils';
import { fetchArtists, fetchArtistsWithAlbums } from '../exercises/exercise-4';
import { 
  madonnaWithSongs,
  metallicaWithSongs,
  madonnaWithSongsAndAlbums,
  metallicaWithSongsAndAlbums
} from './mocks';

type ArtistWithSongs = typeof metallicaWithSongs | typeof madonnaWithSongs;
type ArtistWithAlbums = typeof madonnaWithSongsAndAlbums | typeof metallicaWithSongsAndAlbums;

typeAssert<
  IsTypeEqual<() => Promise<ArtistWithSongs[]>, typeof fetchArtists>
>();

typeAssert<
  IsTypeEqual<() => Promise<ArtistWithAlbums[]>, typeof fetchArtistsWithAlbums>
>();
