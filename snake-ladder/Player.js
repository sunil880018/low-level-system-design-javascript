class Player {
  constructor() {
    this.id = null;
    this.currentPosition = null;
  }
  setter(id, currentPosition) {
    this.id = id;
    this.currentPosition = currentPosition;
  }
  getter() {
    console.log(`id: ${this.id} currentPosition: ${this.currentPosition}`);
  }
}
export { Player };
