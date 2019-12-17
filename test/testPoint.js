const assert = require("chai").assert;
const Point = require("../src/point");
const Line = require("../src/line");
const Circle = require("../src/circle");

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

  describe("#isOn()", () => {
    it("should return true if the point lies on the line", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(4, 4);
      const line = new Line(point1, point2);
      const point = new Point(3, 3);
      const actual = point.isOn(line);
      assert.ok(actual);
    });

    it("should return false if the point doesn't lie on the line", function() {
      const point1 = new Point(1, 1);
      const point2 = new Point(4, 4);
      const line = new Line(point1, point2);
      const point = new Point(2, 3);
      const actual = point.isOn(line);
      assert.notOk(actual);
    });

    it("should return true if the point lies on the circle", () => {
      const point1 = new Point(1, 1);
      const circle = new Circle(point1, 5);
      const point2 = new Point(1, 6);
      const actual = point2.isOn(circle);
      assert.isOk(actual);
    });

    it("should return false when the given point is outside the given circle", () => {
      const point1 = new Point(1, 1);
      const circle = new Circle(point1, 5);
      const point2 = new Point(8, 6);
      const actual = point2.isOn(circle);
      assert.isNotOk(actual);
    });

    it("should return false when the given point is inside the given circle", () => {
      const point1 = new Point(1, 1);
      const circle = new Circle(point1, 5);
      const point2 = new Point(3, 1);
      const actual = point2.isOn(circle);
      assert.isNotOk(actual);
    });
  });
});
