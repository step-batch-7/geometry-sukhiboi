const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

describe("#toString()", () => {
  it("should return the property of Rectangle", () => {
    const vertexA = new Point(1, 1);
    const vertexC = new Point(2, 3);
    const rectangle = new Rectangle(vertexA, vertexC);
    const actual = rectangle.toString();
    const expected = "[Rectangle (1,1) to (2,3)]";
    assert.strictEqual(actual, expected);    
  });
});
