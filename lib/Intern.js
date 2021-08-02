const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);
        this.school = school;
    }

    getSocial() {}

    getRole() {}
}

module.exports = Intern;