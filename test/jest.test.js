test('Devo conhecer as principais assertivas do jest', () => {
    let number = null;
    expect(number).toBeNull();
    number = 10;
    expect(number).not.toBeNull();
    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeLessThan(11);
});

test('Devo saber trabalhar com objetos', () => {
    const obj = { name: 'Jhon', mail: 'john@mail.com' };
    expect(obj).toHaveProperty('name');
    expect(obj).toHaveProperty('name', 'Jhon');
    expect(obj.name).toBe('Jhon');

    const obj2 = { name: 'Jhon', mail: 'john@mail.com' };
    expect(obj).toEqual(obj2);
    expect(obj).toBe(obj);
});
