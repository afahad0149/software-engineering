import {
  getArtistWithMostSongs,
  getNumberOfLongSongs,
  getNumberOfSongs,
} from '../exercises/exercise-3';
import { ironMaidenWithSongs, metallicaWithSongs } from './mocks';

describe('getNumberOfSongs', () => {
  test('counts the number of songs', () => {
    expect(getNumberOfSongs(metallicaWithSongs)).toBe(3);
  });
});

describe('getNumberOfLongSongs', () => {
  test('counts the number of songs over 5 minutes', () => {
    expect(getNumberOfLongSongs(ironMaidenWithSongs)).toBe(1);
  });
});

describe('getArtistWithMostSongs', () => {
  test('returns whole artist', () => {
    expect(
      getArtistWithMostSongs([metallicaWithSongs, ironMaidenWithSongs])
    ).toEqual(metallicaWithSongs);
  });
});
