const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", () => {
  describe("#toString()", () => {
    it("should give properties of the line", () => {
      const point1 = new Point(2, 5);
      const point2 = new Point(4, 6);
      const line = new Line(point1, point2);
      const actual = line.toString();
      const expected = "[Line (2,5) to (4,6)]";
      assert.strictEqual(actual, expected);
    });
  });

  describe("#isEqualTo()", () => {
    it("should validate two equal lines", () => {
      const pointa1 = new Point(2, 3);
      const pointa2 = new Point(5, 8);
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = new Point(2, 3);
      const pointb2 = new Point(5, 8);
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isEqualTo(line2);
      const expected = true;
      assert.isOk(actual, expected);
    });

    it("should invalidate two different lines", () => {
      const pointa1 = new Point(2, 3);
      const pointa2 = new Point(5, 8);
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = new Point(5, 4);
      const pointb2 = new Point(8, 5);
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isEqualTo(line2);
      assert.isNotOk(actual);
    });

    it("should invalidate when other type of object is compared", () => {
      const point1 = new Point(2, 3);
      const point2 = new Point(5, 8);
      const line1 = new Line(point1, point2);
      const line2 = {};
      const actual = line1.isEqualTo(line2);
      assert.isNotOk(actual);
    });

    it("should validate when the given object is being compared by itself", () => {
      const point1 = new Point(2, 3);
      const point2 = new Point(5, 8);
      const line = new Line(point1, point2);
      const actual = line.isEqualTo(line);
      assert.isOk(actual);
    });

    it("should validate when equal lines are given with altered start and end", () => {
      const pointa1 = new Point(2, 3);
      const pointa2 = new Point(5, 8);
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = new Point(5, 8);
      const pointb2 = new Point(2, 3);
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isEqualTo(line2);
      assert.isOk(actual);
    });
  });

  describe("#length", () => {
    it("should calculate the length of line having different start and end point", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(4, 5);
      const line = new Line(point1, point2);
      const actual = line.length;
      const expected = 5;
      assert.strictEqual(actual, expected);
    });

    it("should calculate the length of line having different start and end point when the points are negative", () => {
      const point1 = new Point(-2, -2);
      const point2 = new Point(1, 2);
      const line = new Line(point1, point2);
      const actual = line.length;
      const expected = 5;
      assert.strictEqual(actual, expected);
    });

    it("should calculate the length of line when both points are on X-axis", () => {
      const point1 = new Point(0, 1);
      const point2 = new Point(0, -1);
      const line = new Line(point1, point2);
      const actual = line.length;
      const expected = 2;
      assert.strictEqual(actual, expected);
    });

    it("should calculate the length of line when both points are on Y-axis", () => {
      const point1 = new Point(1, 0);
      const point2 = new Point(-1, 0);
      const line = new Line(point1, point2);
      const actual = line.length;
      const expected = 2;
      assert.strictEqual(actual, expected);
    });
  });

  describe("#isParallelTo()", () => {
    it("should validate when two lines are parallel", () => {
      const pointa1 = new Point(10, 15);
      const pointa2 = new Point(40, 30);
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = new Point(10, 5);
      const pointb2 = new Point(50, 25);
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isParallelTo(line2);
      assert.isOk(actual);
    });

    it("should invalidate when two lines are not parallel", () => {
      const pointa1 = new Point(10, -15);
      const pointa2 = new Point(-40, 30);
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = new Point(10, 5);
      const pointb2 = new Point(50, 25);
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isParallelTo(line2);
      assert.isNotOk(actual);
    });

    it("should invalidate when two lines are overlapping", () => {
      const pointa1 = new Point(0, 6);
      const pointa2 = new Point(6, 6);
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = new Point(5, 6);
      const pointb2 = new Point(9, 6);
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isParallelTo(line2);
      assert.isNotOk(actual);
    });

    it("should invalidate for two different segments of y-axis", () => {
      const point1 = new Point(0, 2);
      const point2 = new Point(0, 4);
      const line1 = new Line(point1, point2);
      const point3 = new Point(0, 6);
      const point4 = new Point(0, 8);
      const line2 = new Line(point3, point4);
      const actual = line1.isParallelTo(line2);
      assert.isNotOk(actual);
    });
  });

  describe("#slope", () => {
    it("should calculate the slope of line with different start and end point", () => {
      const point1 = new Point(3, 1);
      const point2 = new Point(4, 5);
      const line = new Line(point1, point2);
      const actual = line.slope;
      const expected = 4;
      assert.strictEqual(actual, expected);
    });

    it("should calculate the slope of line with different start and end point when both are negative", () => {
      const point1 = new Point(-7, -4);
      const point2 = new Point(-3, -8);
      const line = new Line(point1, point2);
      const actual = line.slope;
      const expected = -1;
      assert.strictEqual(actual, expected);
    });

    it("should calculate the slope of line parallel to X-axis", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(6, 1);
      const line = new Line(point1, point2);
      const actual = line.slope;
      const expected = 0;
      assert.strictEqual(actual, expected);
    });

    it("should calculate the slope of line parallel to Y-axis", () => {
      const point1 = new Point(0, 1);
      const point2 = new Point(0, 3);
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
      const actual = line.findX(2);
      const expected = 2;
      assert.strictEqual(actual, expected);
    });

    it("should give null when given y-coordinate doesn't lies on the given line segment", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(3, 3);
      const line = new Line(point1, point2);
      const actual = line.findX(7);
      assert.isNaN(actual);
    });

    it("should give x-coordinate of start point when line is parallel to X-axis", () => {
      const point1 = new Point(3, 1);
      const point2 = new Point(6, 1);
      const line = new Line(point1, point2);
      const actual = line.findX(1);
      const expected = 3;
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

    it("should give null when given x-coordinate doesn't lies on the given line segment", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(4, 4);
      const line = new Line(point1, point2);
      const actual = line.findY(9);
      assert.isNaN(actual);
    });

    it("should give y-coordinate of start point when line is parallel to Y-axis", () => {
      const point1 = new Point(1, 3);
      const point2 = new Point(1, 7);
      const line = new Line(point1, point2);
      const actual = line.findY(1);
      const expected = 3;
      assert.strictEqual(actual, expected);
    });
  });

  describe("#split()", () => {
    it("should split the given line in two equal lines", () => {
      const point1 = new Point(6, 4);
      const point2 = new Point(12, 8);
      const line = new Line(point1, point2);
      const actual = line.split();

      const firstHalfPoint1 = new Point(6, 4);
      const firstHalfYPoint2 = new Point(9, 6);
      const firstHalf = new Line(firstHalfPoint1, firstHalfYPoint2);

      const secondHalfPoint1 = new Point(9, 6);
      const secondHalfPoint2 = new Point(12, 8);
      const secondHalf = new Line(secondHalfPoint1, secondHalfPoint2);

      const expected = [firstHalf, secondHalf];
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("#hasPoint()", () => {
    it("should return true when the given point lies on the given line", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(5, 5);
      const line = new Line(point1, point2);
      const point3 = new Point(2, 2);
      const actual = line.hasPoint(point3);
      assert.isOk(actual);
    });

    it("should return false when the given point doesn't lies on the given line", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(5, 5);
      const line = new Line(point1, point2);
      const point3 = new Point(7, 7);
      const actual = line.hasPoint(point3);
      assert.isNotOk(actual);
    });

    it("should invalidate when other type of object is give", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(5, 5);
      const line = new Line(point1, point2);
      const point3 = {};
      const actual = line.hasPoint(point3);
      assert.isNotOk(actual);
    });
  });

  describe("#findPointFromStart()", () => {
    it("should return a point which is given distance away from the start point of line", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(7, 9);
      const line = new Line(point1, point2);
      const distance = 5;
      const actual = line.findPointFromStart(distance);
      const expected = new Point(4, 5);
      assert.deepStrictEqual(actual, expected);
    });

    it("should return null when given distance is a string", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(7, 9);
      const line = new Line(point1, point2);
      const distance = "dfg";
      const actual = line.findPointFromStart(distance);
      assert.isNull(actual);
    });
  });

  describe("#findPointFromEnd()", () => {
    it("should return a point which is given distance away from the end point of the line", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(7, 9);
      const line = new Line(point1, point2);
      const distance = 5;
      const actual = line.findPointFromEnd(distance);
      const expected = new Point(4, 5);
      assert.deepStrictEqual(actual, expected);
    });

    it("should return null when given distance is a string", () => {
      const point1 = new Point(1, 1);
      const point2 = new Point(7, 9);
      const line = new Line(point1, point2);
      const distance = "dfg";
      const actual = line.findPointFromStart(distance);
      assert.isNull(actual);
    });
  });
});
