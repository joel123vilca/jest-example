afterEach(() => console.log('despues de cada prueba'));
afterAll(() => console.log('despues de todas las pruebas'));

beforeEach(() => console.log('antes de cada prueba'));
beforeAll(() => console.log('antes de todas las pruebas'));

describe('preparar antes de ejecutar',() => {
    test('Es verdadero',() => {
        expect(true).toBeTruthy();
    });
});