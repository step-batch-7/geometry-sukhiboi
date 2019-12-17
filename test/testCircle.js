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

  describe("#isEqual()", () => {
    it("should validate two equal circles", () => {
      const centre1 = new Point(3, 5);
      const radius1 = 4;
      const circle1 = new Circle(centre1, radius1);

      const centre2 = new Point(3, 5);
      const radius2 = 4;
      const circle2 = new Circle(centre2, radius2);

      const actual = circle1.isEqualTo(circle2);
      assert.isOk(actual);
    });

    it("should invalidate when the one circle's radius is different form other's", () => {
      const centre1 = new Point(3, 5);
      const radius1 = 4;
      const circle1 = new Circle(centre1, radius1);

      const centre2 = new Point(3, 5);
      const radius2 = 6;
      const circle2 = new Circle(centre2, radius2);

      const actual = circle1.isEqualTo(circle2);
      assert.isNotOk(actual);
    });

    it("should invalidate when the one circle's centre is different form other's", () => {
      const centre1 = new Point(4, 5);
      const radius1 = 6;
      const circle1 = new Circle(centre1, radius1);

      const centre2 = new Point(3, 5);
      const radius2 = 6;
      const circle2 = new Circle(centre2, radius2);

      const actual = circle1.isEqualTo(circle2);
      assert.isNotOk(actual);
    });

    it("should invalidate when other type of object is compared", () => {
      const centre1 = new Point(3, 5);
      const radius1 = 4;
      const circle1 = new Circle(centre1, radius1);
      const circle2 = {};
      const actual = circle1.isEqualTo(circle2);
      assert.isNotOk(actual);
    });

    it("should validate when the given object is being compared by itself", () => {
      const centre1 = new Point(3, 5);
      const radius1 = 4;
      const circle1 = new Circle(centre1, radius1);
      const actual = circle1.isEqualTo(circle1);
      assert.isOk(actual);
    });
  });

  describe("#area", () => {
    it("should return the area of circle", () => {
      const centre = new Point(3, 4);
      const radius = 2.3939;
      const circle = new Circle(centre, radius);
      const actual = circle.area;
      const expected = 18;
      assert.approximately(actual, expected, 0.1);
    });
  });

  describe("#perimeter", () => {
    it("should return the perimeter of the circle", () => {
      const centre = new Point(3, 4);
      const radius = 2.387;
      const circle = new Circle(centre, radius);
      const actual = circle.perimeter;
      const expected = 15;
      assert.approximately(actual, expected, 0.1);
    });
  });

  describe("#hasPoint()", () => {
    it("should return true when the given point lies on the given circle", () => {
      const point1 = new Point(1, 1);
      const circle = new Circle(point1, 5);
      const point2 = new Point(1, 6);
      const actual = circle.hasPoint(point2);
      assert.isOk(actual);
    });

    it("should return false when the given point is outside the given circle", () => {
      const point1 = new Point(1, 1);
      const circle = new Circle(point1, 5);
      const point2 = new Point(8, 6);
      const actual = circle.hasPoint(point2);
      assert.isNotOk(actual);
    });

    it("should return false when the given point is inside the given circle", () => {
      const point1 = new Point(1, 1);
      const circle = new Circle(point1, 5);
      const point2 = new Point(3, 1);
      const actual = circle.hasPoint(point2);
      assert.isNotOk(actual);
    });

    it("should invalidate when other type of object is given", () => {
      const point1 = new Point(1, 1);
      const circle = new Circle(point1, 5);
      const point2 = {};
      const actual = circle.hasPoint(point2);
      assert.isNotOk(actual);
    });
  });

  describe("#moveTo()", () => {
    it("should move a circle to given centre", () => {
      const point1 = new Point(1, 1);
      const circle1 = new Circle(point1, 4);
      const point2 = new Point(3, 3);
      const actual = circle1.moveTo(point2);
      const expected = new Circle(point2, 4);
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("#covers()", () => {
    it("should return true if the point lies in the circle or on circle", () => {
      const point1 = new Point(1, 1);
      const circle = new Circle(point1, 5);
      const point2 = new Point(1, 6);
      const actual = circle.covers(point2);
      assert.isOk(actual);
    });

    it("should return false if the point doesn't lies in the circle or on circle", () => {
      const point1 = new Point(1, 1);
      const circle = new Circle(point1, 5);
      const point2 = new Point(9, 6);
      const actual = circle.covers(point2);
      assert.isNotOk(actual);
    });

    it("should return true if the point lies on the circumference circle", () => {
      const point1 = new Point(1, 1);
      const circle = new Circle(point1, 5);
      const point2 = new Point(1, 6);
      const actual = circle.covers(point2);
      assert.isOk(actual);
    });
  });
});
