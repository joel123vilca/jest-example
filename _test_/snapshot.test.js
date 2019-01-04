import { getCharacter } from '../snapshot';
import Rick from '../rick';

describe('Es hora de la intentadas', () => {
    test(Snapshot, () => {
        expect(getCharacter(rick)).toMatchSnaps();
    });
});