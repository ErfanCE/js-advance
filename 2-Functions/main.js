// * Function declation & expression
// * function declaration
/*
const numbers = [12, 34, 57, 80, 1];

function multiplyItems(array, multiplier) {
  return array.map((item) => item * multiplier);
}
console.log(multiplyItems(numbers, 5));

console.log(multiplyItems);
*/

// * function expression
/*
const sumOfNumbers = function (numbers) {
  return numbers.reduce((pre, cur) => pre + cur, 0);
};

console.log(sumOfNumbers(numbers));
*/

// * Function Constructor
/*
const sumOfTwoNumber = new Function(
  'firstNumber',
  'secondNumber',
  'return firstNumber + secondNumber'
);

console.log(sumOfTwoNumber(10, 20));
*/

// * Arrow Function
/*
const averageOfNumbers = (numbers) => {
  const sum = sumOfNumbers(numbers);

  return sum / numbers.length;
};
console.log(averageOfNumbers(numbers));

// const oddNumbers = numbers => numbers.filter(item => item % 2 !== 0);
// console.log(oddNumbers(numbers));
*/

// * IIFE: Immediately Invoked Function Expression(self invoking function)
/*
function game() {
  const score = Math.random() * 10;
  console.log(score);
}
game();

(function (point) {
  const score = Math.random() * point;
  console.log(score);
})(10);
*/

// Anonymous Function (functions without name)

// * First-Class Function (first class citizen)
// 1. a function is an instance of Object
// 2. a function behave like any object
// 3. we can store function in a variable(function expression)
// 4. we can pass a function as an argument to another function(callback function)
// 5. we can return a function from a function(closure)

// * callback function
/*
const container = document.getElementById('container');

function box200x200(parent, cb) {
  const box = document.createElement('div');

  box.style.width = '200px';
  box.style.height = '200px';
  box.style.border = '2px solid #000';
  box.style.marginBottom = '10px';

  parent.appendChild(box);

  cb(box);
}

box200x200(container, (box) => {
  box.style.backgroundColor = 'red';
});

box200x200(container, function (box) {
  box.style.backgroundColor = 'blue';
});
*/

function greeting(greet) {
  const text = 'AI:';

  return function (fullname) {
    console.log(`${text} ${greet} ${fullname}`);
  };
}

const result = greeting('hi');
result('zeinab babayi');

function interviewQuestions(job) {
  return function (firstname) {
    if (job === 'designer') {
      console.log(`${firstname}, can you explain what UX design is?`);
    } else if (job === 'backend') {
      console.log(`${firstname}, can you explain what middleware is?`);
    } else {
      console.log(`${firstname}, what do you do?`);
    }
  };
}

const backendQuestions = interviewQuestions('backend');

backendQuestions('behnam');
backendQuestions('zeinab');

const designerQuestions = interviewQuestions('designer');

designerQuestions('mohammad');
designerQuestions('ali');

interviewQuestions('fronend developer')('ahmad');
