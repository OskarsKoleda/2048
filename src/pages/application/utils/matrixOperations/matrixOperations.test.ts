import { describe, expect, it } from "vitest";
import { rotateClockwise, rotateCounterClockwise } from "./matrixOperations.ts";

// AI-generated tests
describe("matrixUtils", () => {
  describe("rotateClockwise", () => {
    it("should rotate a 2x2 matrix clockwise", () => {
      const input = [
        [1, 2],
        [3, 4],
      ];
      const expected = [
        [3, 1],
        [4, 2],
      ];
      expect(rotateClockwise(input)).toEqual(expected);
    });

    it("should rotate a 3x3 matrix clockwise", () => {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const expected = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ];
      expect(rotateClockwise(input)).toEqual(expected);
    });

    it("should rotate a matrix with zeros clockwise", () => {
      const input = [
        [0, 2, 0],
        [0, 5, 0],
        [0, 8, 0],
      ];
      const expected = [
        [0, 0, 0],
        [8, 5, 2],
        [0, 0, 0],
      ];
      expect(rotateClockwise(input)).toEqual(expected);
    });

    it("should preserve the original matrix", () => {
      const input = [
        [1, 2],
        [3, 4],
      ];
      const original = [
        [1, 2],
        [3, 4],
      ];
      rotateClockwise(input);
      expect(input).toEqual(original);
    });
  });

  describe("rotateCounterClockwise", () => {
    it("should rotate a 2x2 matrix counter-clockwise", () => {
      const input = [
        [1, 2],
        [3, 4],
      ];
      const expected = [
        [2, 4],
        [1, 3],
      ];
      expect(rotateCounterClockwise(input)).toEqual(expected);
    });

    it("should rotate a 3x3 matrix counter-clockwise", () => {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      const expected = [
        [3, 6, 9],
        [2, 5, 8],
        [1, 4, 7],
      ];
      expect(rotateCounterClockwise(input)).toEqual(expected);
    });

    it("should rotate a matrix with zeros counter-clockwise", () => {
      const input = [
        [0, 2, 0],
        [0, 5, 0],
        [0, 8, 0],
      ];
      const expected = [
        [0, 0, 0],
        [2, 5, 8],
        [0, 0, 0],
      ];
      expect(rotateCounterClockwise(input)).toEqual(expected);
    });

    it("should preserve the original matrix", () => {
      const input = [
        [1, 2],
        [3, 4],
      ];
      const original = [
        [1, 2],
        [3, 4],
      ];
      rotateCounterClockwise(input);
      expect(input).toEqual(original);
    });
  });

  describe("rotation relationships", () => {
    it("should return original matrix after four clockwise rotations", () => {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      let result = input;
      for (let i = 0; i < 4; i++) {
        result = rotateClockwise(result);
      }

      expect(result).toEqual(input);
    });

    it("should return original matrix after four counter-clockwise rotations", () => {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      let result = input;
      for (let i = 0; i < 4; i++) {
        result = rotateCounterClockwise(result);
      }

      expect(result).toEqual(input);
    });

    it("clockwise rotation should be inverse of counter-clockwise", () => {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];

      const rotatedClockwise = rotateClockwise(input);
      const backToOriginal = rotateCounterClockwise(rotatedClockwise);

      expect(backToOriginal).toEqual(input);
    });
  });
});
