const Employee = require('./Employee');

// officeNumber aka manPhone
// getRole()—overridden to return 'Manager'

class Manager extends Employee {
    constructor(manName, manId, manEmail, manPhone) {
        super(manName, manId, manEmail);
        this.manPhone = manPhone;
    }
    getPhone() {
        return this.manPhone;
    }

    getRole() {
        return `Manager`;
    };
};

    module.exports = Manager;