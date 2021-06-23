const Intern = require("../lib/Intern");
const Employee = require("../lib/employee");

describe("Intern", () => {
    describe("Initialization", () => {
            it("should set intern's school", () => {
            //ARRANGE 
            const testSchool = "UTest";
            //ACT
            const result = new Intern("Interny Name", 1001001, "intern@test.com", testSchool);
            //ASSERT
            expect(result.school).toEqual(testSchool);

        });

    });
    describe("Functions", () => {
        it("should return school using getSchool()", () => {
            //ARRANGE
            const school = "usernamehere";
            const testIntern = new Intern("Rose", 676767, "rose@test.com", school)
            //ACT
            const testMe = testIntern.getSchool();
            //ASSERT
            expect(testMe).toBe(school);
        });
    });
});