
const Employee = require('./Employee');


class Engineer extends Employee
// github—GitHub username
// getGithub()
// getRole()—overridden to return 'Engineer'
 {
    constructor(name, id, email, github) {
       super(name, email);
       this.github = github;
    };

    getGithub() {
        return this.github;
    ;}

  
   getRole() {
    return `Engineer`;
   };
};

    module.exports = Engineer;