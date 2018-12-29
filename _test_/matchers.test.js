describe('Comparadores comunes', () => {
    const user = {
        name: "joel",
        lastname: "vilca"
    }
    const user2 = {
        name: "joel",
        lastname: "vilca"
    }

    test('igualdad de elementos', () => {
        expect(user).toEqual(user2)
    });

    test('No son exactamente iguales', () => {
        expect(user).not.toEqual(user2);
    });
});
