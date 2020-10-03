const print = (a,b,c) => `${a}->${b}->${c}`;

const flip = fn => function() {
    return fn(...Array.from(arguments).reverse());
  }

const normalRta = print(1,2,3); // 1->2->3
console.log(normalRta);
const flipRta = flip(print)(1,2,3); // 3->2->1
console.log(flipRta);

module.exports = { flip };