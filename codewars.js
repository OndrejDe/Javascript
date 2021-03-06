/*
DESCRIPTION:
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/

function whatday(num) { 
    if(num == 1) {
      return "Sunday";
    } else if(num == 2) {
      return "Monday";
    } else if(num == 3) {
      return "Tuesday";
    } else if(num == 4) {
      return "Wednesday";
    } else if(num == 5) {
      return "Thursday";
    } else if(num == 6) {
      return "Friday";
    } else if(num == 7) {
      return "Saturday";
    } else {
      return "Wrong, please enter a number between 1 and 7"
    }
  }

/*
DESCRIPTION:
We need a function that can transform a number into a string.

What ways of achieving this do you know?

Examples:
123 --> "123"
999 --> "999"
*/

function numberToString(num) {
return num.toString();
}

/*
DESCRIPTION:
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.
*/

function removeChar(str){
    if(str.lenght < 2) {
      return str;
    } else {
      return str.substring(1, str.length -1);
    }
  };

/*
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

Examples:
DESCRIPTION:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/

function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  } else {
    return false;
  }
};

/*
DESCRIPTION:
Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

setAlarm(true, true) -> false
setAlarm(false, true) -> false
setAlarm(false, false) -> false
setAlarm(true, false) -> true
*/

function setAlarm(employed, vacation){
  if(employed == true && vacation == false) {
    return true;
  } else if(employed == false && vacation == false) {
    return false;
  } else if(employed == false && vacation == true) {
    return false;
  } else {
    return false;
  }
}

/*
DESCRIPTION:
Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x){
  return x.replace(/\s/g, "");
}

/*
DESCRIPTION:
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

For example:

summation(2) -> 3
1 + 2

summation(8) -> 36
1 + 2 + 3 + 4 + 5 + 6 + 7 + 8
*/

var summation = function (num) {
  let result = 0;
  for(let i = 1; i <= num; i++) {
    console.log('this is i => ', i);
    result = result + i;
    console.log('this is result =>', result);
  } 
  return result 
}


