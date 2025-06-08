import { beforeEach, describe, expect, it, vi } from "vitest";
import { addNewNumbers, generateInitialBoard } from "./gameBoardPopulation.ts";

// AI-generated tests
describe("tableGenerationUtils", () => {
  beforeEach(() => {
    // Reset Math.random mock before each test
    vi.restoreAllMocks();
  });

  describe("generateInitialBoard", () => {
    it("should generate a 4x4 board", () => {
      const board = generateInitialBoard();
      expect(board.length).toBe(4);
      board.forEach((row) => expect(row.length).toBe(4));
    });

    it("should place exactly two numbers on the board", () => {
      // Mock Math.random to return predictable values
      let randomIndex = 0;
      const mockValues = [0.1, 0.2, 0.3, 0.4]; // These will give different coordinates
      vi.spyOn(Math, "random").mockImplementation(() => mockValues[randomIndex++]);

      const board = generateInitialBoard();

      // Count non-zero numbers on the board
      const nonZeroCount = board.flat().filter((num) => num !== 0).length;
      expect(nonZeroCount).toBe(2);
    });

    it("should only place 2s on initial board", () => {
      // Mock Math.random for predictable coordinates
      let randomIndex = 0;
      const mockValues = [0.1, 0.2, 0.3, 0.4];
      vi.spyOn(Math, "random").mockImplementation(() => mockValues[randomIndex++]);

      const board = generateInitialBoard();

      // Check that all non-zero numbers are 2
      board.flat().forEach((num) => {
        if (num !== 0) {
          expect(num).toBe(2);
        }
      });
    });
  });

  describe("addNewNumbers", () => {
    it("should add one new number to an empty space", () => {
      const initialBoard = [
        [2, 0, 4, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];

      // Mock Math.random for predictable coordinates and value
      let randomIndex = 0;
      const mockValues = [0.25, 0.25, 0.1]; // This will place number at [1,1] and choose 2
      vi.spyOn(Math, "random").mockImplementation(() => mockValues[randomIndex++]);

      const newBoard = addNewNumbers([...initialBoard.map((row) => [...row])]);

      // Count new numbers
      const oldCount = initialBoard.flat().filter((num) => num !== 0).length;
      const newCount = newBoard.flat().filter((num) => num !== 0).length;
      expect(newCount).toBe(oldCount + 1);
    });

    it("should add either 2 or 4 to the board", () => {
      const initialBoard = [
        [2, 0, 4, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];

      // Test adding a 4 (when random value is 0.4)
      let randomIndex = 0;
      const mockValuesFor4 = [0.25, 0.25, 0.4]; // This will place a 4
      vi.spyOn(Math, "random").mockImplementation(() => mockValuesFor4[randomIndex++]);

      const boardWith4 = addNewNumbers([...initialBoard.map((row) => [...row])]);
      const added4 = boardWith4.flat().find((num) => num === 4);
      expect(added4).toBeDefined();

      // Reset mocks
      vi.restoreAllMocks();

      // Test adding a 2 (when random value is 0.1)
      randomIndex = 0;
      const mockValuesFor2 = [0.25, 0.25, 0.1]; // This will place a 2
      vi.spyOn(Math, "random").mockImplementation(() => mockValuesFor2[randomIndex++]);

      const boardWith2 = addNewNumbers([...initialBoard.map((row) => [...row])]);
      const added2 = boardWith2.flat().find((num) => num === 2);
      expect(added2).toBeDefined();
    });

    it("should not overwrite existing numbers", () => {
      const initialBoard = [
        [2, 0, 4, 2],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];

      // Mock Math.random
      let randomIndex = 0;
      const mockValues = [0.25, 0.25, 0.1]; // Coordinates and value
      vi.spyOn(Math, "random").mockImplementation(() => mockValues[randomIndex++]);

      const newBoard = addNewNumbers([...initialBoard.map((row) => [...row])]);

      // Check that original numbers are preserved
      initialBoard.forEach((row, i) => {
        row.forEach((cell, j) => {
          if (cell !== 0) {
            expect(newBoard[i][j]).toBe(cell);
          }
        });
      });
    });
  });
});
