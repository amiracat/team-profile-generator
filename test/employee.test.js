const Employee = require("../employee");

describe("Employee", () => {
    describe("xxx", () => {
        it("should return name of employee", () => {
            const obj = new Employee(name);

            expect(name in obj).toEqual(true);
        });
        it("should return number for employee id", () => {
            const num = 108;
            const obj = new Employee(num);
            expect(obj.number).toEqual(true);
        });
        it("should default number to 0", () => {

            const obj = new Employee();
            expect(obj.number).toEqual(0);
        });
    });

})
//write tests 
//ARRANGE write const num = 8 etc
//ACT const {number} = obj.value();
//ASSERT expect(result).toEqual(num);
