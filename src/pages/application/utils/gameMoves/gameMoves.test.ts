import { describe, expect, it } from "vitest";
import { moveDown, moveLeft, moveRight, moveUp } from "./gameMoves.ts";

describe("gameMoves", () => {
  const sharedInput = [
    [2, 0, 0, 2],
    [2, 0, 0, 2],
    [2, 0, 2, 0],
    [4, 4, 8, 8],
  ];

  describe("moveRight", () => {
    it("should correctly move and sum numbers to the right", () => {
      const expected = {
        summedBoard: [
          [0, 0, 0, 4],
          [0, 0, 0, 4],
          [0, 0, 0, 4],
          [0, 0, 8, 16],
        ],
        points: 36,
      };

      const output = moveRight(sharedInput);

      expect(output).toEqual(expected);
    });
  });

  describe("moveLeft", () => {
    it("should correctly move and sum numbers to the left", () => {
      const expected = {
        summedBoard: [
          [4, 0, 0, 0],
          [4, 0, 0, 0],
          [4, 0, 0, 0],
          [8, 16, 0, 0],
        ],
        points: 36,
      };

      const output = moveLeft(sharedInput);

      expect(output).toEqual(expected);
    });
  });

  describe("moveUp", () => {
    it("should correctly move and sum numbers upwards", () => {
      const expected = {
        summedBoard: [
          [4, 4, 2, 4],
          [2, 0, 8, 8],
          [4, 0, 0, 0],
          [0, 0, 0, 0],
        ],
        points: 8,
      };

      const output = moveUp(sharedInput);

      expect(output).toEqual(expected);
    });
  });

  describe("moveDown", () => {
    it("should correctly move and sum numbers downwards", () => {
      const expected = {
        summedBoard: [
          [0, 0, 0, 0],
          [2, 0, 0, 0],
          [4, 0, 2, 4],
          [4, 4, 8, 8],
        ],
        points: 8,
      };

      const output = moveDown(sharedInput);

      expect(output).toEqual(expected);
    });
  });
});
