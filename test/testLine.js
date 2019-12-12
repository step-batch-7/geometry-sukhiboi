const assert = require("chai").assert;
const {Line} = require("../src/line");

describe("#toString()", () => {
  it("should give properties of the line", () => {
    const point1 = [2, 5];
    const point2 = [4, 6];
    const line = new Line(point1, point2);
    const actual = line.toString();
    const expected = "starting point => x:2, y:5\nending point => x:4, y:6";
    assert.deepStrictEqual(actual, expected);
  });
});