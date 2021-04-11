const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name = '', id, email, school, role) {
        super(name, id, email, role);

        this.school = school;
    }

    getRole() {
        return 'Intern';
    };

    getSchool() {
        return {
            school: this.school
        }
    };
}

module.exports = Intern;
