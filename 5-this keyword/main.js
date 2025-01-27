// Object Global: Window
// console.log(this);
// window.alert() === this.alert()

// function declaration
function first() {
  second();

  function second() {
    console.log(this);
  }
}
first();

const john = {
  firstname: 'john',
  firstMethod: function () {
    console.log(this);

    // john.firstname === this.firstname
  }
};
john.firstMethod();

// lexical this
const erfan = {
  firstname: 'erfan',
  firstMethod: () => {
    // this !== john
    console.log(this);
  }
};
erfan.firstMethod();

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  console.log(this);
});
