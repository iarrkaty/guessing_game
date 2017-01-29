function userGame() {

var userName = prompt('What\'s your name?');
alert('Hello ' + userName + ' Thanks for coming to my site!');
console.log(userName);

var answerOne = prompt('What country was I born in?');
var myAnswerOne ='Japan';

if(answerOne === myAnswerOne) {
  alert('You got it right!')
} else {
  alert('Sorry you got it wrong!')
}

var answerTwo = prompt('What publications has my work been published in?');
var myAnswerTwo = 'New Yorker and MacWorld';

if(answerTwo === myAnswerTwo) {
  alert('You got it right!')
} else {
  alert('Sorry you got it wrong!')
}

var answerThree = prompt('What was my first job?');
var myAnswerThree = 'Custom t-shirt shop';

if(answerThree === myAnswerThree) {
  alert('You got it right!')
} else {
  alert('Sorry you got it wrong!')
}
var answerFour = prompt('What is my favorite show?');
var myAnswerFour = 'Doctor Who';

if(answerFour === myAnswerFour) {
  alert('You got it right!')
} else {
  alert('Sorry you got it wrong!')
}



}
