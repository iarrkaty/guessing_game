function userGame() {

var userName = prompt('What\'s your name?');
alert('Hello ' + userName + ' Thanks for coming to my site!');
console.log(userName);

var answerOne = prompt('What country was I born in?');
var myAnswerOne ='Japan';
console.log(answerOne);

if(answerOne === myAnswerOne) {
  right++ alert('You got it right!')
} else {
  wrong++ alert('Sorry you got it wrong!')
}

var answerTwo = prompt('What publications has my work been published in?');
var myAnswerTwo = 'New Yorker' && 'MacWorld';
console.log(answerTwo);

if(answerTwo === "New Yorker" || answerTwo === "MacWorld") {
  right++ alert('You got it right!')
} else {
  wrong++ alert('Sorry you got it wrong!')
}

var answerThree = prompt('What was my first job?');
var myAnswerThree = 'Custom t-shirt shop';
console.log(answerThree);

if(answerThree === myAnswerThree) {
  right++ alert('You got it right!')
} else {
  wrong++ alert('Sorry you got it wrong!')
}
var answerFour = prompt('What is my favorite show?');
var myAnswerFour = 'Doctor Who';
console.log(answerFour);

if(answerFour === myAnswerFour) {
  right++ alert('You got it right!')
} else {
  wrong++ alert('Sorry you got it wrong!')
}

var answerFive = prompt('What do I collect?');
var answerFive = ['Records' , 'Tattoos' , 'Cookbooks'];
console.log(answerFive);

var answerSix = prompt('How old am I?');
var myAnswerSix = '28'
console.log(answerSix);

var right, wrong; right = wrong = 0
}
