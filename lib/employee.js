
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        return this.name;
    ;}

    getId() {
        return this.id;
    };

    getEmail()
   {
    return this.email;
   };

   getRole() {
    return `Employee`;
};


    printInfo() { //change printInfo into generateHTML function
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Email: ${this.email}`);
    };
};

const employee = new Employee("Amira", 1, "email@email.com");

//employee.printInfo(); //this will change too

module.exports = Employee;