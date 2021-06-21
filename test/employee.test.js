const Employee = require("../lib/Employee");

describe("Employee", () => {


    // describe("DayCare", () => {
    //     describe("Initialization", () => {
    //       it("should create an object with 'children' array, 'capacity' number, and 'ageLimit' number", () => {
    //         const dayCare = new DayCare();
    //         expect(dayCare).toEqual({ children: [], capacity: 3, ageLimit: 6 });
    //       });
    //     });

    describe("Initialization", () => {
        it("should create an object with employee name, id, email", () => {
            //ARRANGE 
            const testInit = ["Hasan", 7, "hasan@git.git"];

            //ACT
            const result = new Employee(testInit)
            //ASSERT
            expect(result).toEqual(testInit);
        });

    });
    describe("name", () => {
        it("should return name of employee", () => {
            //ARRANGE 
            const testString = "Hasan";

            //ACT
            const testMe = new Employee(testString);
            //ASSERT
            expect(testMe).toEqual(testString);
        });
        // it("should return number for employee id", () => {
        //     const num = 108;
        //     const obj = new Employee(num);
        //     expect(obj.number).toEqual(true);
        // });
        // it("should default number to 0", () => {

        //     const obj = new Employee();
        //     expect(obj.number).toEqual(0);
        // });
        // it("should return email address of employee", () => {
        //     const obj = new Employee(name);

        //     expect(name in obj).toEqual(true);
        // });
        // it("should return phone number of employee", () => {
        //     const obj = new Employee(name);

        //     expect(name in obj).toEqual(true);
        // });
        // it("should prompt user to add another employee - either engineer, intern or finish building team", () => {
        //     const obj = new Employee(name);

        //     expect(name in obj).toEqual(true);
        // });
    });
});
