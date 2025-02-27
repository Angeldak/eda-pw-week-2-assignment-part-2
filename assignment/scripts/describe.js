// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We declare a variable called "name" and set it's value to a string of "Dane".
// We then run a conditional that checks if the variable "name" is equal to a string of "Mary"
// If it is "Mary" it console logs "Hi, Mary!"
//If it is not "Mary" it console logs "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We declare a variable named "secret" that is set to undefined
// We then declare a second variable named "code" and set it's value to a number of 123
// A conditional is then run that checks if the variable "code" is equal to the number 123
// If it is, then we update the "secret" variable to a string of "super" and multiply the code times 2
// (The variable "secret" would now be a string value of "super" and the variable "code" would be a number of 246)
// Whether true or false, it continues on with the code to the next conditional that checks if the variable "code" is greater than 250
// if the code is greater than 250 it updates the variable "secret" to a string of "duper".
// The code is NOT greater than 250, so the console logs "super" on the final line of code

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We first declare these three variables: 
// "isStudent" set to a boolean of "true", "age" set to a number of "34", "zip" set to a number of "55407"
// A conditional if then runs to check if "isStudent" is equal to "true" AND "zip" is greater than 8000.  This conditional is not met as it requires both.
// (if both conditions were met it would have console logged "You're a student on the West Coast!")
// it then checks an additional conditional of "isStudent" equal to "false" OR "age" less than 30. Neither of these conditionals are met.
// (if EITHER conditional had been met it would have console logged "What are your hobbies?")
// it then checks a final conditional of "isStudent" equal to "true".  This conditional is met. 
// the console would then log "Welcome to Prime!" for this block.
// If the prior conditional (or none of the above) hadn't been met, the default console log would have been "How about the weather?"

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne should be set to "blue"
// should be let colorOne = "blue";
let colorOne = 'red';
// FIX - colorTwo should be set to "red"
// should be let colorTwo = "red";
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
  // FIX colorTwo should also be updated to "purple"
  // should be colorTwo = "purple";
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
// FIX temp to a constant since it is not changing in code - helps readability
// should be const temp = 40;
let temp = 40;
const time = 4;

// FIX conditional is set to OR operator; should be AND operator
// should be if (temp > 39 && time >=4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
// FIX changing age to const since it is not being changed - helps readability
// should be const age = 21;
let age = 21;
const minAge = 21;

// FIX description says conditional checks if age greater than or equal to minAge; currently reversed (however, the conditional logic is correct)
// should be if (age >= minAge) {
if(minAge <= age) {
  // FIX "entry" and "no entry" are reversed logically
  // should be console.log("enter");
  console.log('no entry');
} else {
  // should be console.log("no entry");
  console.log('enter');
}
*/

