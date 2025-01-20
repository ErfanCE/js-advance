// object litral
const john = {
  // property
  firstname: 'John',
  lastname: 'Smith',
  birthYear: 1987,
  isMarried: true,
  family: ['Mark', 'Emily'],
  job: 'teacher',
  // method
  calcAge: function () {
    return 2025 - this.birthYear;
  }
};

// * Part 01: basic
/*
// access property
john.firstname;
john['firstname'];

// access method
john.calcAge();
john['calcAge']();

// mutate property
john.job = 'programmer';
john['isMarried'] = false;
*/

// * Part 02: object creation
// * I) object litral

// * II) object constructor
/*
const jane = new Object();

// add property
jane.firstname = 'Jane';

// add method
jane.greet = function () {
  console.log(`hey I'm jane`);
};

*/

// * III) .create method
/*
const person = {
  greet: function () {
    return 'hello';
  }
};

const ali = Object.create(person);
ali.firstname = 'ali';
ali.lastname = 'rezayi';

const mohammad = Object.create(person, {
  firstname: { value: 'mohammad' },
  lastname: { value: 'ahmadi' }
});
*/

// * Function Constructor
function Person(firstname, lastname, yearOfBirth, job) {
  // propery
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = 2025 - yearOfBirth;
  this.job = job;

  // method
  this.greet = function () {
    console.log(`hey I'm ${this.firstname}`);
  };
}

const mohammad = new Person('mohammad', 'ahmadi', 2000, 'developer');
const zahra = new Person('zahra', 'abhari', 1998, 'ux designer');

console.log(mohammad.greet());

zahra.greet();
