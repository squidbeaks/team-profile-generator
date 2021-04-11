const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('creates an intern object', () => {
    const intern = new Intern(
        'Juliana',
        1,
        'juliana@test.com',
        'UCLA',
        'Intern'
    );

    expect(intern.name).toBe('Juliana');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('juliana@test.com');
    expect(intern.school).toBe('UCLA');
});

test('Get intern name', () => {
    const intern = new Intern('Juliana', 1, 'juliana@test.com');

    expect(intern.getName()).toHaveProperty('name');
});

test('Get intern id', () => {
    const intern = new Intern('Juliana', 1, 'juliana@test.com');

    expect(intern.getId()).toHaveProperty('id');
});

test('Get intern email', () => {
    const intern = new Intern('Juliana', 1, 'juliana@test.com');

    expect(intern.getEmail()).toHaveProperty('email');
});

test('Get intern role', () => {
    const intern = new Intern('Juliana', 1, 'juliana@test.com');

    expect(intern.getRole()).toBe('Intern');
});

test('Get intern school', () => {
    const intern = new Intern(
        'Juliana',
        1,
        'juliana@test.com',
        'UCLA',
        'intern'
    );

    expect(intern.getSchool()).toHaveProperty('school');
});
