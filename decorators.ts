class Person {
  msg: string;
  constructor(message: string) {
    this.msg = message;
  }
  show() {
    return "Hello, " + this.msg;
  }
}
