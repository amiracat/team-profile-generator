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

        it("should return id using getId() function", () => {
            //ARRANGE
            const testId = 12345;
            const testEmployee = new Employee("Junior", testId, "junior@test.com", "Employee")
            //ACT
            const testMe = testEmployee.getId();
            //ASSERT
            expect(testMe).toBe(testId);
        });

        it("should return an email address using getEmail() function", () => {
            //ARRANGE
            const testEmail = "test@test.com";
            const testEmployee = new Employee("Test Person", 42, testEmail, "Employee")
            //ACT
            const testMe = testEmployee.getEmail();
            //ASSERT
            expect(testMe).toBe(testEmail);
        });

        it("should return a title using getRole() function", () => {
            //ARRANGE
            const testRole = "Employee";
            const testEmployee = new Employee("Julie", 31, "julie@test.com", testRole)
            //ACT
            const testMe = testEmployee.getRole();
            //ASSERT
            expect(testMe).toBe(testRole);
        });

    });
});