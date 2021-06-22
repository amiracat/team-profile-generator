const Employee = require('./employee');

// getSchool()
// getRole()—overridden to return 'Intern'
class Intern extends Employee {
    constructor(name, id, email, school) {
       super(name, id, email);
       this.school = school;
       this.title = "<i class='fas fa-user-graduate'></i> Intern";
    };

    getSchool() {
        return this.school;
    ;}

  
   getRole() {
    return this.title;
   };
};

    module.exports = Intern;