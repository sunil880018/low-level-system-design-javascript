import { Cell } from "./Cell.js";
import { getRandomInt } from "./Dice.js";
import { Jump } from "./Jump.js";
class Board {
  constructor(boardSize, numberOfSnakes, numberOfLadders) {

    this.cells = [];

    for (let i = 0; i < boardSize; i++) {
      this.cells[i] = [];
      for (let j = 0; j < boardSize; j++) {
        this.cells[i][j] = new Cell();
      }
    }
    this.addSnakesLadders(numberOfSnakes, numberOfLadders);
  }

  getCell(playerPosition) {
    const boardRow = Math.floor(playerPosition / this.cells.length);
    const boardColumn = playerPosition % this.cells.length;
    return this.cells[boardRow][boardColumn];
  }

  addSnakesLadders(numberOfSnakes, numberOfLadders) {
    while (numberOfSnakes > 0) {
      let snakeHead = getRandomInt(
        1,
        this.cells.length * this.cells.length - 1
      );
      let snakeTail = getRandomInt(
        1,
        this.cells.length * this.cells.length - 1
      );
      if (snakeTail >= snakeHead) {
        continue;
      }

      let snakeObj = new Jump();
      snakeObj.setter(snakeHead,snakeTail);
      let cell = this.getCell(snakeHead);
      cell.jump = snakeObj;

      numberOfSnakes--;
    }

    while (numberOfLadders > 0) {
      let ladderStart = getRandomInt(
        1,
        this.cells.length * this.cells.length - 1
      );
      let ladderEnd = getRandomInt(
        1,
        this.cells.length * this.cells.length - 1
      );
      if (ladderStart >= ladderEnd) {
        continue;
      }

      let ladderObj = new Jump();
      ladderObj.setter(ladderStart,ladderEnd);
      let cell = this.getCell(ladderStart);
      cell.jump = ladderObj;

      numberOfLadders--;
    }
  }

}

export { Board };
