


function Game(options) {
  this.cardsPlayer1 = options.cardsPlayer1;
  this.cardsPlayer2 = options.cardsPlayer2;
  this.scorePlayer1 = 0;
  this.scorePlayer2 = 0;
  this.difficulty = options.difficulty;
  this.timer = options.timer;
  this.cards = options.cards;
  this.solution = 0;
  this.globalIndex = options.globalIndex;

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

Game.prototype.eventListener = function () {
  var that = this;
  $('#normal').click(function(e) {
    this.difficulty = 'normal';
    that.startCountdown();
  });
  $('#hard').click(function(e) {
    this.difficulty = 'hard';
    setTimeout(function() {
      $('#intro').fadeOut(1000);
      $('#player1').addClass("redcolor");
    }, 300);
  });

};

Game.prototype.beginNormalGame = function () {
  var that = this;
  $('.popup').text('');
  $('.popup').append($('<div/>').attr("class","country").text("test"));
  $('.popup').append('<br> <input type="button" class="btn btn-primary btn-answers1" id="btn-answers1" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers2" id="btn-answers2" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers3" id="btn-answers3" value="test" />');
  this.createQandA();
  var countdown = this.timer;
  var timer = setInterval(function() {
    countdown -= 1000;
    $("#seconds1").text((countdown/1000));
    if (countdown === 0) {
      clearInterval(timer);
    }
  },1000);
  $('.btn').on("click", function(e) {
    var value = $(e.target).attr('value');
    console.log("test " + value);
    alert($(e.target).attr('value'));
    alert(that.solution);
    if ($(e).attr('value') != (this.solution)) {
      that.createQandA();
    } else {
      that.scorePlayer1 += 50;
      console.log(that.scorePlayer1);
      $(".score1").text(that.scorePlayer1);
      that.globalIndex++;
      console.log(that.globalIndex);
      that.createQandA();
    }
  });




};

Game.prototype.beginHardGame = function () {


};

Game.prototype.createQandA = function () {
  var answers = [];
  var solution;
  solution = this.cardsPlayer1[this.globalIndex].capital;
  answers.push(this.cardsPlayer1[this.globalIndex].capital);
  for (var j = this.globalIndex + 1; j < this.globalIndex + 3; j++) {
    var randomInt = Math.floor(Math.random()*this.cardsPlayer1.length);
    answers.push(this.cardsPlayer1[j].capital);
  }
  var answersShuffled = shuffle(answers);
  $(".country").text(this.cardsPlayer1[this.globalIndex].country);
  $(".btn-answers1").attr('value',answersShuffled[0]);
  $(".btn-answers2").attr('value',answersShuffled[1]);
  $(".btn-answers3").attr('value',answersShuffled[2]);

  this.solution = solution;

  console.log(this.solution);
};

Game.prototype.proceedWithGame = function () {

  var that = this;
  if (this.difficulty === 'normal') {
    that.beginNormalGame();
  } else {
    that.beginHardGame();
  }

};

Game.prototype.startCountdown = function () {

  var that = this;
  setTimeout(function() {
    $('#intro').fadeOut(600);
    $('#player1').addClass("redcolor");
    $('#timer1').addClass("redcolor");
  }, 200);
  // var newDiv = document.createElement("div").addClass("popup").innerHTML("TEST");
  setTimeout(function() {
    $('#gameboard').append($('<div/>').attr("id", "maingame").addClass("popup").text("Player 1 - Get Ready"));
    $('#maingame').append($('<div/>').attr("id", "countdown").addClass("redcolor largefont").text("5"));
  }, 800);
  var count = 5;
  var counter = setInterval(function() {
      count -= 1;
      if (count === 0) {
        clearInterval(counter);
        that.proceedWithGame();
      }
    $('#countdown').text(count);
  }, 1000);


};

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
    cardsPlayer2: [],
    cards: new Cards(),
    difficulty: 'normal',
    timer: 60000,
    globalIndex: 0
  });

  game.shuffleCards();
  game.eventListener();


});
