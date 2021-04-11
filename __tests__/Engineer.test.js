const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');
const { test, expect } = require('@jest/globals');

test('creates an engineer object', () => {
    const engineer = new Engineer(
        'James',
        1,
        'james@test.com',
        'https://github.com/james',
        'Engineer'
    );

    expect(engineer.name).toBe('James');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('james@test.com');
    expect(engineer.github).toBe('https://github.com/james');
});

test('Get engineer name', () => {
    const engineer = new Engineer('James', 1, 'james@test.com');

    expect(engineer.getName()).toHaveProperty('name');
});

test('Get engineer id', () => {
    const engineer = new Engineer('James', 1, 'james@test.com');

    expect(engineer.getId()).toHaveProperty('id');
});

test('Get engineer email', () => {
    const engineer = new Engineer('James', 1, 'james@test.com');

    expect(engineer.getEmail()).toHaveProperty('email');
});

test('Get engineer role', () => {
    const engineer = new Engineer('James', 1, 'james@test.com');

    expect(engineer.getRole()).toBe('Engineer');
});

test('Get engineer github', () => {
    const engineer = new Engineer(
        'James',
        1,
        'james@test.com',
        'james',
        'Engineer'
    );

    expect(engineer.getGithub('james')).toHaveProperty('github');
});
