const Engineer = require("../lib/engineer");
const Employee = require("../lib/employee");

describe("Engineer", () => {
    describe("Initialization", () => {
            it("should set engineer github", () => {
            //ARRANGE 
            const testGit = "cwerness";
            //ACT
            const result = new Engineer("Engineery Name", 448, "engineer@test.com", testGit);
            //ASSERT
            expect(result.github).toEqual(testGit);

        });

    });
    describe("Functions", () => {
        it("should return github using getGithub()", () => {
            //ARRANGE
            const engineer = "usernamehere";
            const testEngineer = new Engineer("Female", 99, "female@test.com", engineer)
            //ACT
            const testMe = testEngineer.getGithub();
            //ASSERT
            expect(testMe).toBe(engineer);
        });
    });
});