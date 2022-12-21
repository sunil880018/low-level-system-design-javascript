import { Board } from "./Board.js";
import { Dice } from "./Dice.js";
import { Player } from "./Player.js";

class Game {
  constructor() {
    this.board = new Board(10, 5, 4);
    this.dice = new Dice(1);
    this.playerList = [];
    this.winner = null;
    this.addPlayers();
  }
  addPlayers() {
    let player1 = new Player();
    player1.setter("p1", 0);
    let player2 = new Player();
    player2.setter("p2", 0);
    this.playerList.push(player1);
    this.playerList.push(player2);
  }

  findPlayerTurn() {
    let playerTurns = new Player();
    playerTurns = this.playerList.shift();
    this.playerList.push(playerTurns);
    return playerTurns;
  }

  startGame() {
    while (this.winner == null) {
      //check whose turn now
      let playerTurn = new Player();
      playerTurn = this.findPlayerTurn();
      console.log(
        "player turn is:" +
          playerTurn.id +
          " current position is: " +
          playerTurn.currentPosition
      );
      //roll the dice
      let diceNumbers = this.dice.rollDice();
      //get the new position
      let playerNewPosition = playerTurn.currentPosition + diceNumbers;
      playerNewPosition = this.jumpCheck(playerNewPosition);
      playerTurn.currentPosition = playerNewPosition;

      console.log(
        "player turn is:" +
          playerTurn.id +
          " new Position is: " +
          playerNewPosition
      );
      //check for winning condition
      if (
        playerNewPosition >=
        this.board.cells.length * this.board.cells.length - 1
      ) {
        this.winner = playerTurn.id;
      }
    }
    console.log("WINNER IS:" + this.winner);
  }

  jumpCheck(playerNewPosition) {
    if (
      playerNewPosition >
      this.board.cells.length * this.board.cells.length - 1
    ) {
      return playerNewPosition;
    }

    let cell = this.board.getCell(playerNewPosition);
    if (cell.jump != null && cell.jump.start == playerNewPosition) {
      let jumpBy = cell.jump.start < cell.jump.end ? "ladder" : "snake";
      console.log("jump done by: " + jumpBy);
      return cell.jump.end;
    }

    return playerNewPosition;
  }
  
}

export { Game };
