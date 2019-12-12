const assert = require("chai").assert;
const { Line } = require("../src/line");

describe("#Line", () => {
  describe("#toString()", () => {
    it("should give properties of the line", () => {
      const point1 = [2, 5];
      const point2 = [4, 6];
      const line = new Line(point1, point2);
      const actual = line.toString();
      const expected = "starting point => x:2, y:5\nending point => x:4, y:6";
      assert.deepStrictEqual(actual, expected);
    });
  });

  describe("#isEqualTo()", () => {
    it("should validate two same lines", () => {
      const pointa1 = [2, 3];
      const pointa2 = [5, 8];
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = [2, 3];
      const pointb2 = [5, 8];
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isEqualTo(line2);
      const expected = true;
      assert.strictEqual(actual, expected);
    });

    it("should invalidate two different lines", () => {
      const pointa1 = [2, 3];
      const pointa2 = [5, 8];
      const line1 = new Line(pointa1, pointa2);
      const pointb1 = [5, 4];
      const pointb2 = [8, 5];
      const line2 = new Line(pointb1, pointb2);
      const actual = line1.isEqualTo(line2);
      const expected = false;
      assert.strictEqual(actual, expected);
    });

    it("should invalidate when other type of object is compared", () => {
      const pointa1 = [2, 3];
      const pointa2 = [5, 8];
      const line1 = new Line(pointa1, pointa2);
      const line2 = {
        start: {
          x: 2,
          y: 3
        },
        end: {
          x: 5,
          y: 8
        }
      };
      const actual = line1.isEqualTo(line2);
      const expected = false;
      assert.strictEqual(actual, expected);
    });
  });
});
