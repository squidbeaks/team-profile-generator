const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '', id, email, github, role) {
        super(name, id, email, role);

        this.github = github;
    }

    getRole() {
        return 'Engineer';
    };

    getGithub(github) {
        return {
            github: `https://github.com/${this.github}`
        }
    };
}

module.exports = Engineer;
