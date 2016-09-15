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

var questionFive = prompt(" ").toLowerCase();

if (){
  /* One of these questions should include the use of logical operators
  (refer to page ~157 of the JS text book for example usage).
  As a secondary example, one of your questions can validate use input in the form of 'Yes' and 'Y', or 'No' and 'N'.
} else {

}*/

var questionSix = prompt(" ").toLowerCase();

if() {
  /* One of the questions should include multiple answers (more than two).
  These answers can be stored in an array, and you will want to use the array method indexOf()
  to find out whether the user's guess exists in the array or not.
  If it does, use the index returned to you to select that value
  and tell the user that they guessed the answer correct.
} else {

}*/
