const data = require("../server/data");

const isPrime = function (input) {
  if (input === 1 || input == 0) {
    return false;
  } else if (input === 2) {
    return true;
  } else {
    for (var x = 2; x < input; x++) {
      if (input % x === 0) {
        return false;
      }
    }
    return true;
  }
  // your code here:  this function accepts a positive integer 'input' and should return true if the integer is prime and false if it is not (for simplicity, do not consider 0 or 1 as prime)
};
console.log(isPrime(9))
const nameVowels = function () {
  // your code here:  using 'data', this function should return the input of animals who's name contains more than 3 vowels (for simplicity, do not consider "y" a vowel)
  // console.log( data.map(object =>object.name))
}
const addProperty = function () {
  // your code here:  using 'data', this function should return (without changing the order) a list of animals with a property named 'gender' added to each animal. the value of this new property should be 'F' if the id is prime (highest priority), 'M' if the id is odd, and 'N/A' if the id is even (lowest priority)
};

const palindromes = function (input) {
  // your code here:  this function accepts one string 'input' and should return true if the string is a palindrome and false if it is not
};

const anagrams = function (input1, input2) {
  // your code here:  this function accepts two strings 'input1', 'input2' and should return true if the strings are anagrams and false if they are not
};

const ageSum = function () {
  // your code here:  using 'data', this function should return the sum of all animals ages
};

module.exports = {
  isPrime,
  nameVowels,
  addProperty,
  palindromes,
  anagrams,
  ageSum,
};
