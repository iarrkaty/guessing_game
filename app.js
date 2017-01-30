function userGame() {
//Tally counter
var right, wrong; right = wrong = 0

//Five questions covering a variety of information about me
var userName = prompt('What\'s your name?');
alert('Hello ' + userName + ' Thanks for coming to my site!');
//Include console logs to help with debugging
console.log(userName);

var answerOne = prompt('What country was I born in?');
var myAnswerOne ='Japan';
console.log(answerOne);

if(answerOne === myAnswerOne) {
  right++
  alert('You got it right!')
} else {
  wrong++
  alert('Sorry you got it wrong!')
}

var answerTwo = prompt('What publications has my work been published in?');
var myAnswerTwo = 'New Yorker' && 'MacWorld';
console.log(answerTwo);

if(answerTwo === "New Yorker" || answerTwo === "MacWorld") {
  right++
  alert('You got it right!')
} else {
  wrong++
  alert('Sorry you got it wrong!')
}

var answerThree = prompt('What was my first job?');
var myAnswerThree = 'Custom t-shirt shop';
console.log(answerThree);

if(answerThree === myAnswerThree) {
  right++
  alert('You got it right!')
} else {
  wrong++
  alert('Sorry you got it wrong!')
}
var answerFour = prompt('What is my favorite show?');
var myAnswerFour = 'Doctor Who';
console.log(answerFour);

if(answerFour === myAnswerFour) {
  right++
  alert('You got it right!')
} else {
  wrong++
  alert('Sorry you got it wrong!')
}
//Question with multiple correct answers
  var wrongSix; wrong = 0
while (wrongSix <= 6) {
  var answerFive = prompt('What do I collect?');
  var myAnswerFive = ['Records' , 'Tattoos' , 'Cookbooks'];
  console.log(answerFive);
  if (myAnswerFive.indexOf(answerFive) > -1){
    right++
    alert('You got it right!')
  } else {
    wrong++
    alert('Sorry you got it wrong!')
  }
}
//Question using numeric input
var answerSix = prompt('How old am I?');
var myAnswerSix = '28';
console.log(answerSix);
if (answerSix < 28) {
  alert('Sorry too low!')
} else if (answerSix > 28) {
  alert('Sorry too high!')
} else {
  alert ('You\'re right - I\'m 28!')
}
}
