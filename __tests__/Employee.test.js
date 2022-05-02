const Employee = require('../lib/Employee');
const employee = new Employee('Salvador', '12341234', 'Sbanuelos1234@gmail.com');

test('test if Employee object', () => {
    const employee = new Employee('Salvador', '12341234', 'Sbanuelos1234@gmail.com');

    expect(employee).toEqual(expect.any(Employee));
})

test('test if values correlate to Object', () => {
    const employee = new Employee('Salvador', '12341234', 'Sbanuelos1234@gmail.com');

    expect(employee.name).toBe('Salvador');
    expect(employee.id).toBe('12341234');
    expect(employee.email).toBe('Sbanuelos1234@gmail.com');
})