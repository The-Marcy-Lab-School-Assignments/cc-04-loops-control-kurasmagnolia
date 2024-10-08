//Write your solutions in this file, don't forget to test your functions.
// Qiestion 1
const countFromOne = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(i);
  }
};

console.log("\n");
console.log("Question 1:");
countFromOne(7);

// Question 2
const countEveryOdd = (num) => {
  for (let i = 0; i <= num; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
};

console.log("\n");
console.log("Question 2:");
countEveryOdd(15);

// Question 3
const isNegative = (num) => {
  if (num < 0) {
    console.log(true);
  } else {
    console.log(false);
  }
};

console.log("\n");
console.log("Question 3:");
isNegative(3); //returns false
isNegative(-2); //returns true
isNegative(Math.PI); //returns false

// Quesiton 4
const betweenFiveAndTwenty = (num) => {
  if (num >= 5 && num <= 20) {
    return true;
  } else {
    return false;
  }
};
console.log("\n");
console.log("Question 4:");
console.log(betweenFiveAndTwenty(12)); // returns true
console.log(betweenFiveAndTwenty(5)); // returns true
console.log(betweenFiveAndTwenty(100)); // returns false

// Question 5
const sumOfThreeOrFive = (num) => {
  for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0) {
      num += i;
    } else if (i % 5 === 0) {
      num += i;
    }
  }
  console.log(num);
};
console.log("\n");
console.log("Question 5:");
sumOfThreeOrFive(3);

// Question 6
const isAllLowerCase = (string) => {
  if (string === string.toLowerCase()) {
    return true;
  } else {
    return false;
  }
};

console.log("\n");
console.log("Question 6:");
console.log(isAllLowerCase("hello")); //returns true
console.log(isAllLowerCase("seven eleven")); //returns true
console.log(isAllLowerCase("Seven eleven has the best slushies")); //returns false

// Bonus
const countMultiplesOfFive = (array) => {
  let sum = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 5 === 0) {
      sum++;
    }
  }
  return sum;
};

console.log("\n");
console.log("Bonus:");
console.log(countMultiplesOfFive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // returns 2
console.log(countMultiplesOfFive([15, 23, 35, 45, 67])); // returns 3
console.log(countMultiplesOfFive([2, 6, 14])); // returns 0
