class Player {
  constructor(string, score) {
    this.name = string;
    this.score = score;
  }

  greetings() {
    console.log('Hello, I am ', this.name);
  }
}

const obj1 = new Player('josiah', 0);

console.log(obj1.greetings());
