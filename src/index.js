function print(a,b,c) {
  return `${a}->${b}->${c}`;
}

function flip(fn) {
  return function(...print){                  // ... (spread operator) lo utilizamos para hacer copia de otro objeto
    return fn(...print.reverse())             // en este caso de la funcion print 
  }                                           // utilizamos el reverse() invierte el orden de los elementos a,b,c
};

const normalRta = print(1,2,3); // 1->2->3
console.log(normalRta);
const flipRta = flip(print)(1,2,3); // 3->2->1
console.log(flipRta);

module.exports = { flip };





