// Q1 - Return first elem if falsy, otherwise return second (Note: One '!' = opposite)

function falsyOrTruthy(elem1, elem2) {
  return !elem1 ? elem1 : elem2;
}

// instead of:
function falsyOrTruthy(elem1, elem2) {
  if (!elem1) {
    return elem1;
  } else {
    return elem2;
  }
}

console.log(falsyOrTruthy(false, 100));

// Q2 - Return the length of any given array

function arrLength(arr) {
  return arr.length;
}

console.log(arrLength([50, 3, 7, -10]));

// Q3 - Get the last element in an array (Note: Array starts at 0)

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem(["dog", 0, true, 50]));

// Q4 - Find the sum of an array
// (Note: Use 'for' when you want to use each element inside an array & to loop through every elem)

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    // This is how to loop through every elem in an array
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([100, 200, 300]));

// Q5 - Add up the numbers from a single number (eg. 1 + 2 + 3 = 66)

function progressiveSum(num) {
  let sum = 0;
  for (let i = 1; i <= num; ++i) {
    sum = sum + i;
  }
  return sum;
}

console.log(progressiveSum(5));

// Q6 - Calculate the time from seconds to mm:ss format

function calcTime(seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes.toString().length === 1) {
    timerMinutes = "0" + timerMinutes;
  }

  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(70));

// Q7 - Find the largest number of an array

function getMax(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(getMax([10, 1, 0, -100]));

// Q8 - Find the largest number of an array

function reverseString(str) {
  let reversedString = "";
  for (let i = 0; i < str.length; ++i) {
    reversedString = str[i] + reversedString;
  }
  return reversedString;
}
// Or can change to an array

function reverseString(str) {
  return str.split("").reverse("").join("");
}

console.log(reverseString("Bailey"));

// Q9 - Turn every element in an array into 0

// #1 Option: For Loop

function convertToZeros(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = 0;
  }
  return newArr;
}

// #2 Option: Array 'fill'

function convertToZeros(arr) {
  return new Array(arr.length).fill(0);
}

// #3 Option: Array 'map' (Important)

function convertToZeros(arr) {
  return arr.map((elem) => 0);
}

console.log(convertToZeros([1, 2, 3]));

// Q10 - Filter out all the apples from array of fruits

// #1 Option: For Loop and push anything that isn't an apple onto the new array

function removeApples(arr) {
  let noApples = [];
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== "Apple") {
      noApples.push(arr[i]);
    }
  }
}

// #2 Option: Array 'filter'

function removeApples(arr) {
  return arr.filter((elem) => elem !== "Apple");
}

console.log(removeApples(["Pear", "Grape", "Apple", "Banana"]));

// Q11 - Filter out all the falsy values from array - (Note: use !!element/arr not element/arr === false)

// #1 Option: For Loop

function filterOutFalsy(arr) {
  let truthyArr = [];
  for (let i = 0; i < arr.length; ++i) {
    if (!!arr[i] === true) {
      truthyArr.push(arr[i]);
    }
  }
  return truthyArr;
}

// #2 Option: Array 'filter'

function filterOutFalsy(arr) {
  return arr.filter((elem) => !!elem === true);
}

console.log(filterOutFalsy([false, true, undefined, "", "Bailey", null, 0]));

// Q12 - Truthy to true, Falsy to false
// ie: convertBoolean([100, 0, "Bailey", ""]) = [true, false, true, false]
// Note: Use 'map' because it converts things

function convertBoolean(arr) {
  return arr.map((elem) => !!elem);
}

console.log(convertBoolean([100, 0, "Bailey", ""]));
