const assert = require("chai").assert;
const Point = require("../src/point");

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

  describe("#clone()", () => {
    it("should give Point object with same coordinates as given", () => {
      const xCoordinate = 2;
      const yCoordinate = 9;
      const point1 = new Point(xCoordinate, yCoordinate);
      const point2 = point1.clone();
      assert.notStrictEqual(point1, point2);
      assert.deepStrictEqual(point1, point2);
    });

  });

  describe("#findDistanceTo()", () => {
    it("should return the distance between 2 positive points", () => {
      const point1 = new Point(1, 2);
      const point2 = new Point(7, 2);
      const actual = point1.findDistanceTo(point2);
      const expected = 6;
      assert.strictEqual(actual, expected);
    });

    it("should return the distance between 2 negative points", () => {
      const point1 = new Point(-7, -4);
      const point2 = new Point(-7, -9);
      const actual = point1.findDistanceTo(point2);
      const expected = 5;
      assert.strictEqual(actual, expected);
    });

    it("should return NaN when the object is not a Point", () => {
      const point1 = new Point(1, 2);
      const point2 = {};
      const actual = point1.findDistanceTo(point2);
      assert.isNaN(actual);
    });
    
    it("should return the distance when both points are equal", () => {
      const point1 = new Point(1, 2);
      const point2 = new Point(1, 2);
      const actual = point1.findDistanceTo(point2);
      const expected = 0;
      assert.strictEqual(actual, expected);
    });
  });
});
