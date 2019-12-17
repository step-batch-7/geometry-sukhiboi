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

  describe("#area", () => {
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

  describe("#perimeter", () => {
    it("should return the perimeter of the rectangle", () => {
      const vertexA = new Point(9, 1);
      const vertexC = new Point(6, 6);
      const rectangle = new Rectangle(vertexA, vertexC);
      const actual = rectangle.perimeter;
      const expected = 16;
      assert.strictEqual(actual, expected);
    });

    it("should return the perimeter of the rectangle if the points are negative", () => {
      const vertexA = new Point(-7, -3);
      const vertexC = new Point(-3, -6);
      const rectangle = new Rectangle(vertexA, vertexC);
      const actual = rectangle.perimeter;
      const expected = 14;
      assert.strictEqual(actual, expected);
    });
  });

  describe("#isEqualTo()", () => {
    it("should return true if both rectangles are equal", () => {
      const vertexA = new Point(7, 3);
      const vertexC = new Point(3, 6);
      const rectangle1 = new Rectangle(vertexA, vertexC);
      const rectangle2 = new Rectangle(new Point(7, 3), new Point(3, 6));
      const actual = rectangle1.isEqualTo(rectangle2);
      assert.isOk(actual);
    });

    it("should return false if both rectangles are different", () => {
      const vertexA = new Point(7, 3);
      const vertexC = new Point(3, 6);
      const rectangle1 = new Rectangle(vertexA, vertexC);
      const rectangle2 = new Rectangle(new Point(7, 4), new Point(2, 9));
      const actual = rectangle1.isEqualTo(rectangle2);
      assert.isNotOk(actual);
    });

    it("should invalidate when other type of object is compared", () => {
      const vertexA = new Point(7, 3);
      const vertexC = new Point(3, 6);
      const rectangle1 = new Rectangle(vertexA, vertexC);
      const rectangle2 = {};
      const actual = rectangle1.isEqualTo(rectangle2);
      assert.isNotOk(actual);
    });

    it("should validate when the given object is being compared by itself", () => {
      const vertexA = new Point(7, 3);
      const vertexC = new Point(3, 6);
      const rectangle = new Rectangle(vertexA, vertexC);
      const actual = rectangle.isEqualTo(rectangle);
      assert.isOk(actual);
    });

    it("should validate when we points of the diagonal altered", () => {
      const vertexA = new Point(7, 3);
      const vertexC = new Point(3, 6);
      const rectangle1 = new Rectangle(vertexA, vertexC);
      const rectangle2 = new Rectangle(new Point(3, 6), new Point(7, 3));
      const actual = rectangle1.isEqualTo(rectangle2);
      assert.isOk(actual);
    });
  });
});
