describe('comprobar cadenas de texto',() => {
    const text = 'un bonito texto';
    
    test('debe contender el siguiente texto', () => {
        expect(text).toMatch(/bonito/);
    });
    test('No contiene el siguiente texto',() => {
        expect(text).not.toMatch(/es/);
    });
    test('Comprobar el tamaño de un texto', () => {
        expect(text).toHaveLength(15);
    });
});