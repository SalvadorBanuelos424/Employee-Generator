const Intern = require('../lib/Intern');
const intern = new Intern('Salvador', '12341234', 'Sbanuelos1234@gmail.com', 'UCR Extension');

test('test if Intern object', () => {
    const intern = new Intern('Salvador', '12341234', 'Sbanuelos1234@gmail.com', 'UCR Extension');

    expect(intern).toEqual(expect.any(Intern));
})

test('test if values correlate to Object', () => {
    const intern = new Intern('Salvador', '12341234', 'Sbanuelos1234@gmail.com', 'UCR Extension');

    expect(intern.name).toBe('Salvador');
    expect(intern.id).toBe('12341234');
    expect(intern.email).toBe('Sbanuelos1234@gmail.com');
    expect(intern.school).toBe('UCR Extension');
})