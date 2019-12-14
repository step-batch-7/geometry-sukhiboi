const assert = require("chai").assert;
const { Point } = require("../src/point");

describe("Point", () => {
  describe("#toString()", () => {
    it("should give properties of the point", () => {
      const xCoordinate = 2;
      const yCoordinate = 3;
      const point = new Point(xCoordinate, yCoordinate);
      const actual = point.toString();
      const expected = "[Point @(2,3)]";
      assert.strictEqual(actual, expected);
    });
  });
});
