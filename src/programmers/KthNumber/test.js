const solution = require("./solution.js")

describe("K번째수", () => {
    it("결과1.", () => {
        expect(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]])).toEqual([5, 6, 3]);
    })
});
