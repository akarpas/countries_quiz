


function Game(options) {
  this.cardsPlayer1 = options.cardsPlayer1;
  this.cardsPlayer2 = options.cardsPlayer2;
  this.scorePlayer1 = options.scorePlayer1;
  this.scorePlayer2 = options.scorePlayer2;
  this.difficulty = options.difficulty;
  this.timer = options.timer;
  this.cards = options.cards;

}

function shuffle(tmpArray) {
    var i = tmpArray.length,
        j = 0,
        temp;

    while (i--) {

        j = Math.floor(Math.random() * (i+1));

        // swap randomly chosen element with current element
        temp = tmpArray[i];
        tmpArray[i] = tmpArray[j];
        tmpArray[j] = temp;

    }

    return tmpArray;
}

Game.prototype.shuffleCards = function () {

  var tmpArray = this.cards.countries;
  console.log(tmpArray);
  var array = shuffle(tmpArray);
  console.log(array);
  var half_length = Math.ceil(array.length / 2);
  var tmpArray1 = array.splice(0,half_length);
  var tmpArray2 = array;
  this.cardsPlayer1 = tmpArray1;
  this.cardsPlayer2 = tmpArray2;

};

$(document).ready(function() {

  var game = new Game({
    cardsPlayer1: [],
    cardsPlayer2: [], // 12
    scorePlayer1: 0,
    scorePlayer2: 0,
    cards: new Cards(),
    difficulty: 'normal',
    timer: 60000
  });

  game.shuffleCards();


});
