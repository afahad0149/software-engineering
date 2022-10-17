import { IsTypeAssignable, IsTypeEqual, typeAssert } from './utils';
import { boyGeorge, pulp } from './mocks';
import { describeArtist, describeBand, describeSoloArtist } from '../exercises/exercise-2';

type Band = typeof pulp;

typeAssert<IsTypeEqual<typeof describeBand, (band: Band) => string>>();

type SoloArtist = typeof boyGeorge;

typeAssert<
  IsTypeEqual<typeof describeSoloArtist, (soloArtist: SoloArtist) => string>
>();

typeAssert<IsTypeAssignable<(band: Band) => string, typeof describeArtist>>();

typeAssert<
  IsTypeAssignable<(soloArtist: SoloArtist) => string, typeof describeArtist>
>();
