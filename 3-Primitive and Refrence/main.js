// * Data Type:
// Primitives: string - number - boolean  - undefiend - null
// Refrence(Object): Array - object litral - Set - Math - ...

// pirimitive
let a = 10;
let b = a;

console.log(a);
console.log(b);

// mutate
a = -9;

console.log(a);
console.log(b);

// Object - Refrence
const obj1 = {
  lastname: 'babayi',
  age: 20
};

const obj2 = obj1;

console.log(obj1);
console.log(obj2);

// mutate
obj1.age = 100;

console.log(obj1);
console.log(obj2);
