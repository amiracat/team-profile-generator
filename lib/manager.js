const Employee = require('./employee');

// officeNumber aka phone
// getRole()—overridden to return 'Manager'

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
        this.title = "<i class='fas fa-mug-hot'></i> Manager";
    }
    getPhone() {
        return this.phone;
    }

    getRole() {
        return this.title;
    };
};

    module.exports = Manager;