import {
  countNumberMatches,
  countMatches,
  sum,
  titleCase,
} from '../exercises/exercise-1';

describe('sum', () => {
  test('adds two numbers', () => {
    expect(sum(3, 7)).toBe(10);
  });
});

describe('titleCase', () => {
  test('single word', () => {
    expect(titleCase('INDIE')).toBe('Indie');
    expect(titleCase('pop')).toBe('Pop');
  });
  test('multiple words', () => {
    expect(titleCase('heavy metal')).toBe('Heavy Metal');
    expect(titleCase('drum n bass')).toBe('Drum N Bass');
  });
});

describe('countNumberMatches', () => {
  test('counts numbers matching predicate', () => {
    expect(countNumberMatches([1, 2, 3, 4], (num) => num > 2)).toBe(2);
    expect(countNumberMatches([1, 2, 3, 4], (num) => num < 4)).toBe(3);
    expect(countNumberMatches([1, 2, 3, 4], (num) => num === 4)).toBe(1);
  });
});

describe('countMatches', () => {
  test('counts strings matching predicate', () => {
    expect(
      countMatches(
        ['cat', 'dog', 'horse'],
        (animal) => animal.length <= 3
      )
    ).toBe(2);
  });
  test('counts objects matching predicate', () => {
    expect(
      countMatches(
        [
          { name: 'Alex', city: 'Barcelona' },
          { name: 'Vic', city: 'London' },
          { name: 'Berni', city: 'Barcelona' },
        ],
        (person) => person.city === 'London'
      )
    ).toBe(1);
  });
});
