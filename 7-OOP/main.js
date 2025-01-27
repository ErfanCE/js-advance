// JS: primitive - reference(object) // prototype base

// OOP: Object Oriented Programming => Every thing is object
// property
// method
// constructor | class (Person)
// instance: erfan, ali, mohammad
// inheritance
// -------
// prototype
// prototype chain

const john = {
  // property
  firstname: 'john',
  family: ['mark', 'jane'],
  yearOfbirth: 1999,
  // method
  calcAge: function () {
    return 2025 - this.yearOfbirth;
  }
};

const Person = function (firstname, lastname, yearOfBirth, job) {
  this.firstname = firstname;
  this.lastname = lastname;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

// inheritance
Person.prototype.calcAge = function () {
  console.log(2025 - this.yearOfBirth);
};

// instance
const behnam = new Person('behnam', 'mohammadi', 2000, 'developer');
const fatemeh = new Person('fatemeh', 'ahmadi', 2002, 'ux designer');

behnam.calcAge();
fatemeh.calcAge();

// Porototype chain
// behnam.proto > Athlete.proto > Person.proto > Object.proto
