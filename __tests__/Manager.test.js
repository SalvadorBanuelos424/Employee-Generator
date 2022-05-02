const Manager = require('../lib/Manager');
const manager = new Manager('Salvador', '12341234', 'Sbanuelos1234@gmail.com', '404');

test('test if Manager object', () => {
    const manager = new Manager('Salvador', '12341234', 'Sbanuelos1234@gmail.com', '404');

    expect(manager).toEqual(expect.any(Manager));
})

test('test if values correlate to Object', () => {
    const manager = new Manager('Salvador', '12341234', 'Sbanuelos1234@gmail.com', '404');

    expect(manager.name).toBe('Salvador');
    expect(manager.id).toBe('12341234');
    expect(manager.email).toBe('Sbanuelos1234@gmail.com');
    expect(manager.room).toBe('404');
})