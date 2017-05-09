var game = {
  ballOn:     65,
  homeScore:  0,
  awayScore:  0,
  down:       1,
  toGo:       0,
  isHomePoss: true
}

function changePossession() {
  this.ballOn = 100 - this.ballOn;
  this.isHomePoss != this.isHomePoss;
}

var g = Object.create(game);

g.ballOn = 45;

console.log(g.ballOn);

g.changePossession();

console.log(g.ballOn);
