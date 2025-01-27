// * Spread Operator ...
/*
function addFourNumbers(a, b, c, d) {
  return a + b + c + d;
}

console.log(addFourNumbers(1, 2, 3, 4));

const numbers = [1, -2, 10, 3, 4];

console.log(addFourNumbers.apply(null, numbers));

// ES6
console.log(addFourNumbers(...numbers));

// problem
console.log(Math.max(1, 2, 3));

console.log(Math.max.apply(null, numbers));

// es6 => sytanctic sugar
console.log(Math.max(...numbers));


// 1st usecase concat
const arr1 = [1, 2, 3];
const arr2 = [-3, -2, -1];

const arr3 = [...arr2, 0, ...arr1];

const obj1 = {
  firstname: 'x',
  lastname: 'y'
};

const obj2 = {
  job: 'z',
  age: 10
};

const obj3 = { ...obj1, ...obj2, isMarried: true };
console.log(obj3);

// 2nd copy
const arr = [1, 2, 3];
const arrCopy = [...arr];

const obj = { a: '1', b: '2' };
const objCopy = { ...obj };
*/

// * Rest Parameter ...

// es5
function sumNumbers() {
  const inputs = Array.from(arguments);

  let sum = 0;

  for (const item of inputs) {
    sum += item;
  }

  console.log(sum);
}

sumNumbers(10, 20, 30);

// es6
/*
function max(...numbers) {
  let maximum = numbers[0];

  for (const item of numbers) {
    if (item > maximum) {
      maximum = item;
    }
  }

  console.log(maximum);
}

max(10, 2);
*/
