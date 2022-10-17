import { IsTypeEqual, typeAssert } from './utils';
import { countNumberMatches, countMatches, titleCase } from '../exercises/exercise-1';

typeAssert<IsTypeEqual<typeof titleCase, (input: string) => string>>();

typeAssert<
  IsTypeEqual<
    typeof countNumberMatches,
    (numbers: number[], predicate: (el: number) => boolean) => number
  >
>();

typeAssert<
  IsTypeEqual<
    typeof countMatches,
    <T>(elements: T[], predicate: (el: T) => boolean) => number
  >
>();
