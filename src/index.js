function print(a,b,c) {
  return `${a}->${b}->${c}`;
}

function flip(fn) {
  return function(){
    // your code
    // El objeto arguments es un objeto similar a un Array que se corresponde con los argumentos pasados a la función.
    return `${arguments[2]}->${arguments[1]}->${arguments[0]}`;
    // const num = fn.split("->");
    // const numReverse = num.reverse()
    // return `${numReverse[0]}->${numReverse[1]}->${numReverse[2]}`
  }
}

const normalRta = print(1,2,3); // 1->2->3
console.log(normalRta);
const flipRta = flip(print)(1,2,3); // 3->2->1
console.log(flipRta);

module.exports = { flip };