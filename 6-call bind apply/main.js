const john = {
  firstname: 'John',
  lastname: 'Smith',
  age: 26,
  job: 'teacher',
  presentation: function (style, timeOfDay) {
    if (style === 'formal') {
      console.log(
        `Good ${timeOfDay} Ladies and Gentlemen, I am ${this.firstname} ${this.lastname}`
      );
    } else if (style === 'friendly') {
      console.log(`hey! I am ${this.firstname}, have a nice ${timeOfDay}`);
    }
  }
};

const emily = {
  firstname: 'Emily',
  lastname: 'Clark',
  age: 33,
  job: 'developer'
};

// * call
john.presentation('friendly', 'night');

// method barrowing
john.presentation.call(emily, 'formal', 'afternoon');

// * apply
john.presentation.apply(emily, ['formal', 'night']);

// -------------------------
// * bind
const johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('night');
johnFriendly('morning');
johnFriendly('afternoon');

const years = [1976, 2016, 2018, 2025, 1900, 1986];

function calcArray(arr, fn) {
  return arr.map((item) => fn(item));
}

function ageCalc(year) {
  return 2025 - year;
}

function isFullYear(limit, age) {
  return age >= limit;
}

const ages = calcArray(years, ageCalc);

const iranFullYear = isFullYear.bind(this, 18);

const result = calcArray(ages, iranFullYear);

console.log(result);
