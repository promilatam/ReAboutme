'use strict'
// Declare variable and use prompts
var username = prompt('What is your username');
console.log('username: ' + username);

var correctAnswer = 0;
//===================================================================

var aboutme = prompt('I\m from China?')
//function one

var aboutme = function() {
  var first = prompt('Am I from China?').toLowerCase();
  if (first === 'yes' || first === 'n') {
    alert('You got it wrong');
  }
  else if (first === 'no' || first === 'n') {
    alert('You are my friend!');         
  } else {
    alert('Invalid input');
  }
  console.log(aboutme);

};
//==========================================================================
//function 2

var ques2 = prompt('Do I have a Son?')

var ques2 = function() {
  var first = prompt('Am I from Son?').toLowerCase();
  if (first === 'yes' || first === 'n') {
    alert('You got it wrong');
  }
  else if (first === 'no' || first === 'n') {
    alert('You are my friend!');         
  } else {
    alert('Invalid input');
  }
  console.log(ques2);

};
//==================================================================================
//Question 6
//Generate random number from 1-20
var randomNumber = Math.floor(Math.random() * 20) + 1;

console.log(randomNumber);
var sixthResponse = parseInt(prompt('Guess the number I am thinking in between 1-20'));

console.log(sixthResponse);
console.log(typeof(sixthResponse));

for (var i = 0; i < 4; i++) {
if (sixthResponse === randomNumber) {
console.log('correct guess');
alert('correct!!');
break;

}
else if (sixthResponse > randomNumber) {
sixthResponse = parseInt(prompt('Too high. Guess again!'));
console.log('Too High!');
}
else {
sixthResponse = parseInt(prompt('Too low. Guess again!'));
console.log('Too low!');
}
}
//===================================================================================
// 7 Qustion
// Crearing Arrey called 'statevisted' which has list of states

var stateVisited = new Array( 'new york', 'texas', 'new jeersey', 'virginia', 'utah','maine', 'Michigan');
console.log('stateVisited:' + stateVisited);
alert('Let\s play guessing game');

var choice = prompt('which state I have visited?');
console.log('choice:' + choice);

var attempt = 1;
loop:
while(attempt < 6)
{
for (var i = 0; i < stateVisited.length; i++){
if(choice === stateVisited[i]){
alert('Yes! you are rock star! thats is right!')
loop1;

}

}
choice = prompt('You all most got this, Let\s try it again');
attempt++;
console.log('choice: ' + choice);

}
//================================================================
//Question8
// Counting correct answers
if (correctAnswer >= 6){
    alert(username + 'You did awasome job');
} else{
    alert(username + 'You get ' +correctAnswer+' out of 7 correct. Better try next time')
}
console.log('correctAnswer:' +correctAnswer)
//========================================================================
