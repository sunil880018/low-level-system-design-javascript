function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Dice {
  constructor(diceCount) {
    this.diceCount = diceCount;
    this.min = 1;
    this.max = 6;
  }
  rollDice() {
    let totalSum = 0;
    let diceUsed = 0;
    while (diceUsed < this.diceCount) {
      totalSum += getRandomInt(this.min, this.max + 1);
      diceUsed++;
    }
    return totalSum;
  }
}

export { Dice , getRandomInt};
// module.exports = { Dice , getRandomInt}