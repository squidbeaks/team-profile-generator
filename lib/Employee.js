class Employee{
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    };

    getName() {
        return {
            name: this.name
        }
    };

    getId() {
        return {
            id: this.id
        }
    };

    getEmail() {
        return {
            email: this.email
        }
    };

    getRole() {
        return 'Employee';
    };
}

module.exports = Employee;