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

});
