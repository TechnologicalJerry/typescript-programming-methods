class MyDrawing {
  length: number = 20;
  breadth: string = 15;

  get rectangle() {
    return this.length * this.breadth;
  }
}
console.log(new MyDrawing().square);
