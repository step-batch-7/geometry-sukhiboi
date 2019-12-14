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

  describe("#isEqualTo()", () => {
    it("should validate two equal points", () => {
      const xCoordinateOfP1 = 2;
      const yCoordinateOfP1 = 3;
      const point1 = new Point(xCoordinateOfP1, yCoordinateOfP1);
      const xCoordinateOfP2 = 2;
      const yCoordinateOfP2 = 3;
      const point2 = new Point(xCoordinateOfP2, yCoordinateOfP2);
      const actual = point1.isEqualTo(point2);
      assert.isOk(actual);
    });
    it("should invalidate two different points", () => {
      const xCoordinateOfP1 = 2;
      const yCoordinateOfP1 = 3;
      const point1 = new Point(xCoordinateOfP1, yCoordinateOfP1);
      const xCoordinateOfP2 = 3;
      const yCoordinateOfP2 = 5;
      const point2 = new Point(xCoordinateOfP2, yCoordinateOfP2);
      const actual = point1.isEqualTo(point2);
      assert.isNotOk(actual);
    });
    it("should invalidate when other type of object is compared", () => {
      const xCoordinateOfP1 = 2;
      const yCoordinateOfP1 = 3;
      const point1 = new Point(xCoordinateOfP1, yCoordinateOfP1);
      const point2 = {};
      const actual = point1.isEqualTo(point2);
      assert.isNotOk(actual);
    });
    it("should validate when the given object is being compared by itself", () => {
      const xCoordinate = 2;
      const yCoordinate = 3;
      const point = new Point(xCoordinate, yCoordinate);
      const actual = point.isEqualTo(point);
      assert.isOk(actual);
    });
  });

  describe("#visit()", () => {
    it("should evaluate sum of coordinates when sum function is given", function() {
      const xCoordinate = 2;
      const yCoordinate = 3;
      const point = new Point(xCoordinate, yCoordinate);
      const actual = point.visit((x, y) => x + y);
      const expected = 5;
      assert.strictEqual(actual, expected);
    });
    it("should evaluate multiplication of coordinates when multiply function is given", function() {
      const xCoordinate = 5;
      const yCoordinate = 3;
      const point = new Point(xCoordinate, yCoordinate);
      const actual = point.visit((x, y) => x * y);
      const expected = 15;
      assert.strictEqual(actual, expected);
    });
  });
});
