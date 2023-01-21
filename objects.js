const playerMethods = {
  getScore() {
    console.log(this.score);
  },
  increamentScore() {
    this.score++;
  },
};

const player = {
  name: 'sachin',
  score: 0,
  __proto__: playerMethods,
};

player.increamentScore();
console.log(player.getScore());
