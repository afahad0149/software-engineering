import { boyGeorge, pulp } from './mocks';
import {
  describeArtist,
  describeBand,
  describeSoloArtist,
} from '../exercises/exercise-2';

describe('describeBand', () => {
  test('returns description of a band', () => {
    expect(describeBand(pulp)).toBe(
      'Pulp are a Indie band with 6 members, formed in 1978.'
    );
  });
});

describe('describeSoloArtist', () => {
  test('returns description of a solo artist', () => {
    expect(describeSoloArtist(boyGeorge)).toBe(
      'Boy George is a Pop artist, born in 1961.'
    );
  });
});

describe('describeArtist', () => {
  test('describes a band', () => {
    expect(describeArtist(pulp)).toBe(describeBand(pulp));
  });

  test('describes a solo artist', () => {
    expect(describeArtist(boyGeorge)).toBe(describeSoloArtist(boyGeorge));
  });
});
