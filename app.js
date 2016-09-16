var userName = prompt('What\'s your name?');
alert('Welcome to my site, ' + userName + '!');

var questionOne = prompt("Was I born in Florida?").toLowerCase();

if (questionOne === 'yes' || questionOne === 'y'){
  alert("Yup, you got it!");
} else if (questionOne === 'no' || questionOne === 'n'){
  alert("Incorrect.");
} else {
  alert("You must answer yes or no.");
}

var questionTwo = prompt("Do you think I'm really geeky?").toLowerCase();

if (questionTwo === 'yes' || questionTwo === 'y'){
  alert("Nah, I'm not super geeky.");
} else if (questionTwo === 'no' || questionTwo === 'n'){
  alert("You're right, I'm only half-geek.");
} else {
  alert("You must answer yes or no.");
}

var questionThree = prompt("Do you think I'm over 30?").toLowerCase();

if (questionThree === 'yes' || questionThree === 'y') {
  alert("Don't worry, you aren't in trouble. I am over 30! Plus, 30 is the new 20.");
} else if (questionThree === 'no' || questionThree === 'n'){
  alert("You are too kind.");
} else {
  alert("You must answer yes or no.");
}

var questionFour = prompt("Are you sick of all the questions?").toLowerCase();

if (questionFour === 'yes' || questionFour === 'y'){
  alert("Ok, cool. I am too. Goodnight!");
} else if (questionFour === 'no' || questionFour === 'n'){
  alert("Alright let me think of some more then.");
} else {
  alert("You must answer yes or no.");
}

var qestionFive = prompt("Would you say I'm at least 5 feet tall?").toLowerCase();

if (questionFive === 'yes' || questionFive === 'y'){
  alert("Good, you don't think I'm a midget.");
} else if (questionFive === 'no' || questionFive === 'n'){
  alert("You really think I'm a midget?");
} else {
  alert("You must answer yes or no.");
}

var questionSix = prompt(" ").toLowerCase();

var myArray = ['cat', 'bunny', 'dog'];

if (questionSix === myArray.indexOf) {
  alert("You know me so well!")
} else if (questionSix )
