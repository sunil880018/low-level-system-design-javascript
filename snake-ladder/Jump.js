class Jump {
  constructor() {
    this.start = null;
    this.end = null;
  }
  setter(start, end) {
    this.start = start;
    this.end = end;
  }
  getter() {
    console.log(`start: ${this.start} end: ${this.end}`);
  }
}
export { Jump };
