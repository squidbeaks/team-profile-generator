const Employee = require('../lib/Employee.js');

test('creates an Employee object', () => {
    const employee = new Employee('Jill', 1, 'jill@test.com');

    expect(employee.name).toBe('Jill');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('jill@test.com');
});

test('Get employee name', () => {
    const employee = new Employee('Jill', 1, 'jill@test.com');

    expect(employee.getName()).toHaveProperty('name');
});

test('Get employee id', () => {
    const employee = new Employee('Jill', 1, 'jill@test.com');

    expect(employee.getId()).toHaveProperty('id');
});

test('Get employee email', () => {
    const employee = new Employee('Jill', 1, 'jill@test.com');

    expect(employee.getEmail()).toHaveProperty('email');
});

test('Get employee role', () => {
    const employee = new Employee('Jill', 1, 'jill@test.com');

    expect(employee.getRole()).toBe('Employee');
});