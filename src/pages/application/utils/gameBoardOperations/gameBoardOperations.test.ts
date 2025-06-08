import { describe, expect, it } from "vitest";
import { hasBoardChanged, isThereSpaceOnBoard, sumTable } from "./gameBoardOperations.ts";

describe("tableOperationsUtils", () => {
  describe("isThereSpaceOnBoard", () => {
    it("should return true when there is space (0) on the board", () => {
      const board = [
        [2, 0, 4],
        [2, 4, 8],
        [0, 4, 2],
      ];
      expect(isThereSpaceOnBoard(board)).toBe(true);
    });

    it("should return false when there is no space on the board", () => {
      const board = [
        [2, 4, 2],
        [2, 4, 8],
        [4, 2, 2],
      ];
      expect(isThereSpaceOnBoard(board)).toBe(false);
    });
  });

  describe("sumTable", () => {
    it("should correctly sum adjacent numbers in a table and calculate points", () => {
      const input = [
        [2, 2, 0],
        [2, 2, 4],
        [0, 4, 4],
      ];

      const expected = {
        summedBoard: [
          [0, 0, 4],
          [0, 4, 4],
          [0, 0, 8],
        ],
        points: 16,
      };

      expect(sumTable(input)).toEqual(expected);
    });

    it("should handle empty spaces correctly and calculate points as zero", () => {
      const input = [
        [0, 0, 2],
        [0, 2, 0],
        [2, 0, 0],
      ];

      const expected = {
        summedBoard: [
          [0, 0, 2],
          [0, 0, 2],
          [0, 0, 2],
        ],
        points: 0,
      };

      expect(sumTable(input)).toEqual(expected);
    });

    it("should calculate points when multiple rows are summed", () => {
      const input = [
        [2, 2, 2, 2],
        [4, 4, 0, 0],
        [8, 0, 8, 0],
      ];

      const expected = {
        summedBoard: [
          [0, 0, 4, 4],
          [0, 0, 0, 8],
          [0, 0, 0, 16],
        ],
        points: 32,
      };

      expect(sumTable(input)).toEqual(expected);
    });
  });

  describe("hasBoardChanged", () => {
    it("should return false when the boards are identical", () => {
      const initialBoard = [
        [2, 4, 2],
        [4, 8, 2],
        [2, 4, 8],
      ];
      const modifiedBoard = [
        [2, 4, 2],
        [4, 8, 2],
        [2, 4, 8],
      ];
      expect(hasBoardChanged(initialBoard, modifiedBoard)).toBe(false);
    });

    it("should return true when the boards are different", () => {
      const initialBoard = [
        [2, 4, 2],
        [4, 8, 2],
        [2, 4, 8],
      ];
      const modifiedBoard = [
        [2, 4, 2],
        [4, 0, 2],
        [2, 4, 8],
      ];
      expect(hasBoardChanged(initialBoard, modifiedBoard)).toBe(true);
    });

    it("should return true when a single cell is changed", () => {
      const initialBoard = [
        [2, 4, 2],
        [4, 8, 2],
        [2, 4, 8],
      ];
      const modifiedBoard = [
        [2, 4, 2],
        [4, 8, 0],
        [2, 4, 8],
      ];
      expect(hasBoardChanged(initialBoard, modifiedBoard)).toBe(true);
    });

    it("should return true when a board is expanded in size", () => {
      const initialBoard = [
        [2, 4],
        [4, 8],
      ];
      const modifiedBoard = [
        [2, 4, 0],
        [4, 8, 0],
        [0, 0, 0],
      ];
      expect(hasBoardChanged(initialBoard, modifiedBoard)).toBe(true);
    });
  });
});
