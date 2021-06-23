const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return phone number using getPhone()", () => {
            //ARRANGE
            const manager = 1231231234;
            const testManager = new Manager("test", 1, "a@b.com", manager)
            //ACT
            const testMe = testManager.getPhone();
            //ASSERT
            expect(testMe).toBe(manager);
        });

    });
});