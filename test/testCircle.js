const assert = require("chai").assert;
const Point = require("../src/point");
const Circle = require("../src/circle");

describe("circle", () => {
  describe("#toString()", () => {
    it("should give properties of the line", () => {
      const centre = new Point(5, 8);
      const radius = 8;
      const circle = new Circle(centre, radius);
      const actual = circle.toString();
      const expected = "[Circle @(5,8) radius 8]";
      assert.strictEqual(actual, expected);
    });
  });
});