const assert = require("chai").assert;
const { Line } = require("../src/line");
const { Point } = require("../src/point");

describe("Line", () => {
  describe("#toString()", () => {
    it("should give properties of the line", () => {
      const point1 = { x: 2, y: 5 };
      const point2 = { x: 4, y: 6 };
      const line = new Line(point1, point2);
      const actual = line.toString();
      const expected = "[Line (2, 5) to (4, 6)]";
      assert.strictEqual(actual, expected);
    });
  });

  describe("#isEqualTo()", () => {
    it("should validate two same lines", () => {
      const pointa1 = { x: 2, y: 3 };
      const pointa2 = { x: 5, y: 8 };
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = { x: 2, y: 3 };
      const pointb2 = { x: 5, y: 8 };
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isEqualTo(line2);
      const expected = true;
      assert.isOk(actual, expected);
    });

    it("should invalidate two different lines", () => {
      const pointa1 = { x: 2, y: 3 };
      const pointa2 = { x: 5, y: 8 };
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = { x: 5, y: 4 };
      const pointb2 = { x: 8, y: 5 };
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isEqualTo(line2);
      assert.isNotOk(actual);
    });

    it("should invalidate when other type of object is compared", () => {
      const pointa1 = { x: 2, y: 3 };
      const pointa2 = { x: 5, y: 8 };
      const line1 = new Line(pointa1, pointa2);
      const line2 = {};
      const actual = line1.isEqualTo(line2);
      assert.isNotOk(actual);
    });

    it("should validate when both the given object is being compared by itself", () => {
      const point1 = { x: 2, y: 3 };
      const point2 = { x: 5, y: 8 };
      const line = new Line(point1, point2);
      const actual = line.isEqualTo(line);
      assert.isOk(actual);
    });
  });

  describe("#length", () => {
    it("should calculate the length of line having different start and end point", () => {
      const point1 = { x: 1, y: 1 };
      const point2 = { x: 4, y: 5 };
      const line = new Line(point1, point2);
      const actual = line.length;
      const expected = 5;
      assert.strictEqual(actual, expected);
    });
    it("should calculate the length of line having different start and end point when the points are negative", () => {
      const point1 = { x: -2, y: -2 };
      const point2 = { x: 1, y: 2 };
      const line = new Line(point1, point2);
      const actual = line.length;
      const expected = 5;
      assert.strictEqual(actual, expected);
    });
    it("should calculate the length of line when both points are on X-axis", () => {
      const point1 = { x: 0, y: 1 };
      const point2 = { x: 0, y: -1 };
      const line = new Line(point1, point2);
      const actual = line.length;
      const expected = 2;
      assert.strictEqual(actual, expected);
    });
    it("should calculate the length of line when both points are on Y-axis", () => {
      const point1 = { x: 1, y: 0 };
      const point2 = { x: -1, y: 0 };
      const line = new Line(point1, point2);
      const actual = line.length;
      const expected = 2;
      assert.strictEqual(actual, expected);
    });
  });

  describe("#isParallelTo()", () => {
    it("should validate when two lines are parallel", () => {
      const pointa1 = { x: 10, y: 15 };
      const pointa2 = { x: 40, y: 30 };
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = { x: 10, y: 5 };
      const pointb2 = { x: 50, y: 25 };
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isParallelTo(line2);
      assert.isOk(actual);
    });
    it("should invalidate when two lines are not parallel", () => {
      const pointa1 = { x: 10, y: -15 };
      const pointa2 = { x: -40, y: 30 };
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = { x: 10, y: 5 };
      const pointb2 = { x: 50, y: 25 };
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isParallelTo(line2);
      assert.isNotOk(actual);
    });
    it("should invalidate when two lines are overlapping", () => {
      const pointa1 = { x: 0, y: 6 };
      const pointa2 = { x: 6, y: 6 };
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = { x: 5, y: 6 };
      const pointb2 = { x: 9, y: 6 };
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isParallelTo(line2);
      assert.isNotOk(actual);
    });
  });

  describe("#slope", () => {
    it("should calculate the slope of line with different start and end point", () => {
      const point1 = { x: 3, y: 1 };
      const point2 = { x: 4, y: 5 };
      const line = new Line(point1, point2);
      const actual = line.slope;
      const expected = 4;
      assert.strictEqual(actual, expected);
    });

    it("should calculate the slope of line with different start and end point when both are negative", () => {
      const point1 = { x: -7, y: -4 };
      const point2 = { x: -3, y: -8 };
      const line = new Line(point1, point2);
      const actual = line.slope;
      const expected = -1;
      assert.strictEqual(actual, expected);
    });

    it("should calculate the slope of line parallel to X-axis", () => {
      const point1 = { x: 1, y: 1 };
      const point2 = { x: 6, y: 1 };
      const line = new Line(point1, point2);
      const actual = line.slope;
      const expected = 0;
      assert.strictEqual(actual, expected);
    });

    it("should calculate the slope of line parallel to Y-axis", () => {
      const point1 = { x: 0, y: 1 };
      const point2 = { x: 0, y: 3 };
      const line = new Line(point1, point2);
      const actual = line.slope;
      const expected = undefined;
      assert.strictEqual(actual, expected);
    });
  });

  describe("#findX()", () => {
    it("should give the x-coordinate when given y-coordinate lies on the given line segment", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(3, 3);
      const line = new Line(point1, point2);
      const actual = line.findX(2)
      const expected = 2;
      assert.strictEqual(actual, expected);
    });
  });

  describe("#findY()", () => {
    it("should give the y-coordinate when given x-coordinate lies on the given line segment", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(4, 4);
      const line = new Line(point1, point2);
      const actual = line.findY(3);
      const expected = 3;
      assert.strictEqual(actual, expected);
    });
  });
});
