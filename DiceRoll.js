var dice = {
  roll: function print () {
    var randomNumber = Math.floor(Math.random() * 7);
    return randomNumber;
  }
}


function printNumber(number) {
  var answerbox = document.getElementById('answerbox');
  answerbox.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};