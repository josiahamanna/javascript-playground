function Player (name, score) {
  this.name = name;
  this.score = score;
}

Player.prototype.getScore = function () {
  console.log(this.score);
}

const player1 = new Player('josiah', 0)

console.log(player1.getScore())
