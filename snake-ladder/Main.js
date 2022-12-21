import { Game } from "./Game.js";
class Main {
  constructor() {
    this.game = new Game();
  }
  start() {
    this.game.startGame();
  }
}

let main = new Main();
main.start();

// install babel because import,export not supported for browser
// npm install --save-dev @babel/core @babel/cli @babel/node @babel/preset-env


// npm run start