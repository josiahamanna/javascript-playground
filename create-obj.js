function createPlayer(name, score) {
  const player = Object.create(playerMethods);
  player.name = name;
  player.score = score;

  return player;
}

const playerMethods = {
  greeting: function () {
    console.log('Hey! I am ', this.name);
  },
};

const player1 = createPlayer('josiah', 0);

console.log(player1.greeting());
