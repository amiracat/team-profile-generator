const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object", () => {
            //ARRANGE 
            //ACT
            const testEmp = new Employee();
            //ASSERT
            expect(typeof (testEmp)).toEqual("object");
        });

        it("should set name", () => {
            //ARRANGE 
            const name = "Arnold";
            //ACT
            const testName = new Employee(name);
            //ASSERT
            expect(testName.name).toBe(name);

        });

        it("should set employee id", () => {
            //ARRANGE 
            const testID = 20;
            //ACT
            const result = new Employee("Pamela", testID);
            //ASSERT
            expect(result.id).toEqual(testID);

        });

        it("should set email", () => {
            //ARRANGE 
            const testEmail = "amiraholden@gmail.com";
            //ACT
            const result = new Employee("Georgia", 313, testEmail);
            //ASSERT
            expect(result.email).toBe(testEmail);

        });

    });

    describe("Functions", () => {
        it("should return a name using getName() function", () => {
            //ARRANGE 
            const newName = "Willa";
            //ACT
            const result = new Employee(newName);
            //ASSERT
            expect(result.getName()).toBe(newName);
        });

        // it("should return an ID using getId() function", () => {
        //     //ARRANGE 
        //     const newID = 12345;
        //     //ACT
        //     const result = new Employee(newID);
        //     //ASSERT
        //     expect(result.getId()).toEqual(newID);
        // });

        // it("should return an email address using getEmail() function", () => {
        //     //ARRANGE 
        //     const newEmail = "test@test.com";
        //     //ACT
        //     const result = new Employee(newEmail);
        //     //ASSERT
        //     expect(result.getEmail()).toBe(newEmail);
        // });

        // it("should return a title using getRole() function", () => {
        //     //ARRANGE 
        //     const testRole = "Employee";
        //     //ACT
        //     const result = new Employee(testRole);
        //     //ASSERT
        //     expect(result.getRole()).toBe(testRole);
        // });

    });
});