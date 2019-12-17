const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");
const Point = require("../src/point");

describe("Rectangle", () => {
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

  describe("#area()", () => {
    it("should return the area of a rectangle", () => {
      const vertexA = new Point(9, 1);
      const vertexC = new Point(6, 6);
      const rectangle = new Rectangle(vertexA, vertexC);
      const actual = rectangle.area;
      const expected = 15;
      assert.strictEqual(actual, expected);
    });

    it("should return the area of a rectangle if the points are negative", () => {
      const vertexA = new Point(-9, -5);
      const vertexC = new Point(-3, -2);
      const rectangle = new Rectangle(vertexA, vertexC);
      const actual = rectangle.area;
      const expected = 18;
      assert.strictEqual(actual, expected);
    });
  });
});
