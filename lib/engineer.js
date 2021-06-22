const Employee = require('./employee');


class Engineer extends Employee
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'
 {
    constructor(name, id, email, github) {
       super(name, id, email);
       this.github = github;
       this.title = "<i class='fas fa-laptop-code'></i> Engineer"
    };

    getGithub() {
        return this.github;
    ;}

  
   getRole() {
    return this.title;
   };
};

    module.exports = Engineer;