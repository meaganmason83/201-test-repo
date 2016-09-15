var userName = prompt('What\'s your name?');
alert('Welcome to my site, ' + userName + '!');

var questionOne = prompt("Was I born in Florida?").toLowerCase();

if (questionOne === 'yes' || questionOne === 'y'){
alert("Yup, you got it!");
} else {
  alert("Incorrect.");
}

var questionTwo = prompt("Do you think I'm really geeky?").toLowerCase();

if (questionTwo === 'yes' || questionTwo === 'y'){
  alert("Nah, I'm not super geeky.");
} else {
  alert("You're right, I'm only half-geek.");
}

var questionThree = prompt("Do you think I'm over 30?").toLowerCase();

if (questionThree === 'yes' || questionThree === 'y') {
  alert("Don't worry, you aren't in trouble. I am over 30! Plus, 30 is the new 20.");
} else {
  alert("You are too kind.");
}

var questionFour = prompt("Are you sick of all the questions?").toLowerCase();

if (questionFour === 'yes' || questionFour === 'y'){
  alert("Ok, cool. I am too. Goodnight!");
} else {
  alert("Alright let me think of some more then.");
};
