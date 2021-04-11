const Manager = require('../lib/Manager.js');
const Employee = require('../lib/Employee.js');

test('creates a manager object', () => {
    const manager = new Manager('Mei Ling', 1, 'meiling@test.com', 1, 'Manager');

    expect(manager.name).toBe('Mei Ling');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('meiling@test.com');
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('Gets manager name', () => {
    const manager = new Manager('Mei Ling');

    expect(manager.getName()).toHaveProperty('name');
});

test('Get manager id', () => {
    const manager = new Manager('Mei Ling', 1);

    expect(manager.getId()).toHaveProperty('id');
});

test('Get manager email', () => {
    const manager = new Manager('Mei Ling', 1, 'meiling@test.com');

    expect(manager.getEmail()).toHaveProperty('email');
});

test('Get manager role', () => {
    const manager = new Manager('Mei Ling', 1, 'meiling@test.com');

    expect(manager.getRole()).toBe('Manager');
});