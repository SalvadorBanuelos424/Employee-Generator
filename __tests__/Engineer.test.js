const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Salvador', '12341234', 'Sbanuelos1234@gmail.com', 'SalvadorBanuelos424');

test('test if Engineer object', () => {
    const engineer = new Engineer('Salvador', '12341234', 'Sbanuelos1234@gmail.com', 'SalvadorBanuelos424');

    expect(engineer).toEqual(expect.any(Engineer));
})

test('test if values correlate to Object', () => {
    const engineer = new Engineer('Salvador', '12341234', 'Sbanuelos1234@gmail.com', 'SalvadorBanuelos424');

    expect(engineer.name).toBe('Salvador');
    expect(engineer.id).toBe('12341234');
    expect(engineer.email).toBe('Sbanuelos1234@gmail.com');
    expect(engineer.github).toBe('SalvadorBanuelos424');
})