function print(a,b,c) {
  return `${a}->${b}->${c}`;
}

function flip(fn) {
  return function(){
    // your code
  }
}

const normalRta = print(1,2,3); // 1->2->3
console.log(normalRta);
const flipRta = flip(print)(1,2,3); // 3->2->1
console.log(flipRta);

module.exports = { flip };