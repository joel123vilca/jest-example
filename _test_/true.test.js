import { isNull, isTrue} from '../true';
import { isFalse, isUndefined } from '../true';

describe("Probar Resultados nulos", () => {
    test('null', () => {
        expect(isNull()).toBeNull();
    });
});

describe("Probar Resultados verdaderos", () => {
    test('Verdadero', () => {
        expect(isTrue()).toBeTruthy();
    });
});

describe("Probar Resultados falso", () => {
    test('Falso', () => {
        expect(isFalse()).toBeFalsy();
    });
});

describe("Probar Resultados undefined", () => {
    test('undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});

describe("probar resultados no verdaderos", () => {
    test('falso o verdadero', () => {
        expect(isFalse()).not.toBeTruthy();
    });
});

