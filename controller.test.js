const targetFn = require("./controller");

describe("the print function", ()=>{

    // standard best practice - clear all data
    beforeEach(()=>{
        jest.clearAllMocks();
    })

    it("should respond with 'Hello world!'", ()=>{ //test name
        const mockReq = {};
        const mockRes = {
            send:jest.fn()
        }

        targetFn(mockReq, mockRes);
        expect(mockRes.send).toHaveBeenCalledWith("Hello World!!!!"); // If you change this value, the test will fail.
    })
})