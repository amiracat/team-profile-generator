const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

describe("Manager", () => {
    describe("Initialization", () => {
            it("should set manager phone", () => {
            //ARRANGE 
            const testPhone = 6129999999;
            //ACT
            const result = new Manager("Manager Name", 100, "manager@test.com", testPhone);
            //ASSERT
            expect(result.phone).toEqual(testPhone);

        });

    });
    describe("Functions", () => {
        it("should return phone number using getPhone()", () => {
            //ARRANGE
            const manager = 1231231234;
            const testManager = new Manager("test", 1, "a@b.com", manager)
            //ACT
            const testMe = testManager.getPhone();
            //ASSERT
            expect(testMe).toBe(manager);
        });

        // it("should return a title using getRole() function", () => {
        //     //ARRANGE 
        //     const testRole = "Manager";
        //     //ACT
        //     const result = new Manager(testRole);
        //     //ASSERT
        //     expect(result.getRole()).toBe(testRole);
        // });

    });
});