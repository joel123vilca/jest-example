import { arrayFruits, arrayColors} from '../arrays';

describe("comprobaremos que exite un elemento", () => { 
    test('tiene una banana?', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('no contiene un platano',() => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('comprobar el tamaño de una array', () =>{
        expect(arrayFruits()).toHaveLength(6);
    });
});

describe("comprobaremos que contiene colores", () => {
    test('tiene color green', () => {
        expect(arrayColors()).toContain('green');
    });
});