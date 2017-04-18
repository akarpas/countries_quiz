


function Game(options) {
  this.cardsPlayer1 = options.cardsPlayer1;
  this.cardsPlayer2 = options.cardsPlayer2;
  this.scorePlayer1 = 0;
  this.scorePlayer2 = 0;
  this.correct1 = 0;
  this.correct2 = 0;
  this.player = 1;
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
    that.difficulty = 'normal';
    that.startCountdown();
    setTimeout(function() {
      $('#intro').fadeOut(600);
      $('#player1').addClass("redcolor");
      $('#timer1').addClass("redcolor");
    }, 200);
  });
  $('#hard').click(function(e) {
    that.difficulty = 'hard';
    that.startCountdown();
    setTimeout(function() {
      $('#intro').fadeOut(600);
      $('#player1').addClass("redcolor");
      $('#timer1').addClass("redcolor");
    }, 200);
  });

};

Game.prototype.player1normal = function () {

  var that = this;
  $('.popup').text('');
  $('.popup').append($('<div/>').attr("class","country").text("test"));
  $('.popup').append('<br> <input type="button" class="btn btn-primary btn-answers1" id="btn-answers1" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers2" id="btn-answers2" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers3" id="btn-answers3" value="test" />');
  var solution = this.createQandAp1();
  var countdown = this.timer;
  var timer = setInterval(function() {
    countdown -= 1000;
    $("#seconds1").text((countdown/1000));
    if (countdown === 0) {
      clearInterval(timer);
      that.player=2;
      that.globalIndex=0;
      $('#player1').removeClass("redcolor");
      $('#timer1').removeClass("redcolor");
      $('#player2').addClass("redcolor");
      $('#timer2').addClass("redcolor");
      $('.popup').fadeOut(200).remove();
      that.startCountdown();
    }
  },1000);
  $('.btn').on("click", function(e) {
    var value = $(e.target).attr('value');
    console.log("test " + value);
    if (value === (solution)) {
      that.scorePlayer1 += 50;
      $(".score1").text(that.scorePlayer1);
      that.globalIndex++;
      that.correct1++;
      $(".correct1").text(that.correct1);
      solution = that.createQandAp1();
    } else {
      that.globalIndex++;
      solution = that.createQandAp1();
    }
  });

};

Game.prototype.player2normal = function () {

  var that = this;
  $('.popup').text('');
  $('.popup').append($('<div/>').attr("class","country").text("test"));
  $('.popup').append('<br> <input type="button" class="btn btn-primary btn-answers1" id="btn-answers1" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers2" id="btn-answers2" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers3" id="btn-answers3" value="test" />');
  var solution = this.createQandAp2();
  var countdown = this.timer;
  var timer = setInterval(function() {
    countdown -= 1000;
    $("#seconds2").text((countdown/1000));
    if (countdown === 0) {
      clearInterval(timer);
      $(".popup").empty();
      that.declareWinner();
    }
  },1000);
  $('.btn').on("click", function(e) {
    var value = $(e.target).attr('value');
    console.log("test " + value);
    if (value === (solution)) {
      that.scorePlayer2 += 50;
      $(".score2").text(that.scorePlayer2);
      that.globalIndex++;
      that.correct2++;
      $(".correct2").text(that.correct2);
      solution = that.createQandAp2();
    } else {
      that.globalIndex++;
      solution = that.createQandAp2();
    }
  });

};

Game.prototype.createQandAp1 = function () {

  $(".country").text(this.cardsPlayer1[this.globalIndex].country);
  var answers = [];
  solution = this.cardsPlayer1[this.globalIndex].capital;
  answers.push(this.cardsPlayer1[this.globalIndex].capital);
  for (var j = this.globalIndex + 1; j < this.globalIndex + 3; j++) {
    var randomInt = Math.floor(Math.random()*this.cardsPlayer1.length);
    answers.push(this.cardsPlayer1[j].capital);
  }
  var answersShuffled = shuffle(answers);
  console.log("global index in create qa FUNCTION: " + this.globalIndex);
  $(".btn-answers1").attr('value',answersShuffled[0]);
  $(".btn-answers2").attr('value',answersShuffled[1]);
  $(".btn-answers3").attr('value',answersShuffled[2]);
  return solution;
};

Game.prototype.createQandAp2 = function () {

  $(".country").text(this.cardsPlayer2[this.globalIndex].country);
  var answers = [];
  solution = this.cardsPlayer2[this.globalIndex].capital;
  answers.push(this.cardsPlayer2[this.globalIndex].capital);
  for (var j = this.globalIndex + 1; j < this.globalIndex + 3; j++) {
    var randomInt = Math.floor(Math.random()*this.cardsPlayer2.length);
    answers.push(this.cardsPlayer2[j].capital);
  }
  var answersShuffled = shuffle(answers);
  console.log("global index in create qa FUNCTION: " + this.globalIndex);
  $(".btn-answers1").attr('value',answersShuffled[0]);
  $(".btn-answers2").attr('value',answersShuffled[1]);
  $(".btn-answers3").attr('value',answersShuffled[2]);
  return solution;
};

Game.prototype.player1hard = function () {

  var that = this;
  $('.popup').text('');
  $('.popup').append($('<div/>').attr("class","country").text("test"));
  $('.popup').append('<br> <input type="button" class="btn btn-primary btn-answers1" id="btn-answers1" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers2" id="btn-answers2" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers3" id="btn-answers3" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers4" id="btn-answers4" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers5" id="btn-answers5" value="test" />');
  var solution = this.createQandAp1hard();
  var countdown = this.timer;
  var timer = setInterval(function() {
    countdown -= 1000;
    $("#seconds1").text((countdown/1000));
    if (countdown < 1) {
      clearInterval(timer);
      that.player=2;
      that.globalIndex=0;
      $('#player1').removeClass("redcolor");
      $('#timer1').removeClass("redcolor");
      $('#player2').addClass("redcolor");
      $('#timer2').addClass("redcolor");
      $('.popup').fadeOut(200).remove();
      that.startCountdown();
    }
  },1000);
  $('.btn').on("click", function(e) {
    var value = $(e.target).attr('value');
    console.log("test " + value);
    if (value === (solution)) {
      that.scorePlayer1 += 50;
      $(".score1").text(that.scorePlayer1);
      that.globalIndex++;
      that.correct1++;
      $(".correct1").text(that.correct1);
      solution = that.createQandAp1hard();
    } else {
      that.globalIndex++;
      if (that.scorePlayer1 > 20) {
        that.scorePlayer1 -= 20;
      }
      $(".score1").text(that.scorePlayer1);
      countdown -= 3000;
      solution = that.createQandAp1hard();
    }
  });

};

Game.prototype.createQandAp1hard = function () {

  $(".country").text(this.cardsPlayer1[this.globalIndex].country);
  var answers = [];
  solution = this.cardsPlayer1[this.globalIndex].capital;
  answers.push(this.cardsPlayer1[this.globalIndex].capital);
  for (var j = this.globalIndex + 1; j < this.globalIndex + 5; j++) {
    var randomInt = Math.floor(Math.random()*this.cardsPlayer1.length);
    answers.push(this.cardsPlayer1[j].capital);
  }
  var answersShuffled = shuffle(answers);
  console.log("global index in create qa FUNCTION: " + this.globalIndex);
  $(".btn-answers1").attr('value',answersShuffled[0]);
  $(".btn-answers2").attr('value',answersShuffled[1]);
  $(".btn-answers3").attr('value',answersShuffled[2]);
  $(".btn-answers4").attr('value',answersShuffled[3]);
  $(".btn-answers5").attr('value',answersShuffled[4]);
  return solution;
};

Game.prototype.player2hard = function () {

  var that = this;
  $('.popup').text('');
  $('.popup').append($('<div/>').attr("class","country").text("test"));
  $('.popup').append('<br> <input type="button" class="btn btn-primary btn-answers1" id="btn-answers1" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers2" id="btn-answers2" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers3" id="btn-answers3" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers4" id="btn-answers4" value="test" />');
  $('.popup').append('<br><br> <input type="button" class="btn btn-primary btn-answers5" id="btn-answers5" value="test" />');
  var solution = this.createQandAp2hard();
  var countdown = this.timer;
  var timer = setInterval(function() {
    countdown -= 1000;
    $("#seconds2").text((countdown/1000));
    if (countdown < 1) {
      clearInterval(timer);
      $(".popup").empty();
      that.declareWinner();
    }
  },1000);
  $('.btn').on("click", function(e) {
    var value = $(e.target).attr('value');
    console.log("test " + value);
    if (value === (solution)) {
      that.scorePlayer2 += 50;
      $(".score2").text(that.scorePlayer2);
      that.globalIndex++;
      that.correct2++;
      $(".correct2").text(that.correct2);
      solution = that.createQandAp2hard();
    } else {
      that.globalIndex++;
      if (that.scorePlayer2 > 20) {
        that.scorePlayer2 -= 20;
      }
      $(".score2").text(that.scorePlayer2);
      countdown -= 3000;
      solution = that.createQandAp2hard();
    }
  });

};

Game.prototype.createQandAp2hard = function () {

  $(".country").text(this.cardsPlayer2[this.globalIndex].country);
  var answers = [];
  solution = this.cardsPlayer2[this.globalIndex].capital;
  answers.push(this.cardsPlayer2[this.globalIndex].capital);
  for (var j = this.globalIndex + 1; j < this.globalIndex + 5; j++) {
    var randomInt = Math.floor(Math.random()*this.cardsPlayer2.length);
    answers.push(this.cardsPlayer2[j].capital);
  }
  var answersShuffled = shuffle(answers);
  console.log("global index in create qa FUNCTION: " + this.globalIndex);
  $(".btn-answers1").attr('value',answersShuffled[0]);
  $(".btn-answers2").attr('value',answersShuffled[1]);
  $(".btn-answers3").attr('value',answersShuffled[2]);
  $(".btn-answers4").attr('value',answersShuffled[3]);
  $(".btn-answers5").attr('value',answersShuffled[4]);
  return solution;
};

Game.prototype.declareWinner = function () {

  if (this.scorePlayer1 > this.scorePlayer2) {
    $(".popup").addClass("largefont").text("Player 1 is the Winner!");
    $(".popup").append('<br><input type="button" class="btn btn-primary" value="Restart" onClick="window.location.reload()"/>');
  } else if (this.scorePlayer1 < this.scorePlayer2) {
    $(".popup").addClass("largefont").text("Player 2 is the Winner!");
    $(".popup").append('<br><input type="button" class="btn btn-primary" value="Restart" onClick="window.location.reload()"/>');
  } else {
    $(".popup").addClass("largefont").text("No Winner...You have exactly the same score. Try again.");
    $(".popup").append('<br><input type="button" class="btn btn-primary" value="Restart" onClick="window.location.reload()"/>');
  }

};

Game.prototype.proceedWithGame = function () {

  var that = this;
  if (that.difficulty === 'normal' && that.player === 1) {
    that.player1normal();
  } else if (that.difficulty === "normal" && this.player === 2) {
    that.player2normal();
  } else if (that.difficulty === "hard" && that.player === 1) {
    console.log("entering the if");
    that.player1hard();
  } else {
    that.player2hard();
  }

};

Game.prototype.startCountdown = function () {


  var that = this;
  setTimeout(function() {
    $('#gameboard').append($('<div/>').attr("id", "maingame").addClass("popup").addClass("bigfont").text("Player "+ that.player + " - Get Ready"));
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
  var array = shuffle(tmpArray);
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
