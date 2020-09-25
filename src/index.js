// function print(a,b,c) {
//   return `${a}->${b}->${c}`;
// }

// function flip(fn) {
//   return function(){
//     // your code
//     let args = Object.values(arguments).reverse();
//     return fn(...args);
//   }
// }

// const normalRta = print(1,2,3); // 1->2->3
// console.log(normalRta);
// const flipRta = flip(print)(1,2,3); // 3->2->1
// console.log(flipRta);

// module.exports = { flip };

function print(d,e,f) {
  return `${d}->${e}->${f}`;
}

function flip(fn) {
  return function(){
    // your code
    let args = Object.values(arguments).reverse();
    return fn(...args);
  }
}
let a = prompt('Ingresa 1 numero','')
let b = prompt('Ingresa 1 numero','')
let c = prompt('Ingresa 1 numero','')
const normalRta = print(a,b,c); // 1->2->3
console.log(normalRta);
const flipRta = flip(print)(a,b,c); // 3->2->1
console.log(flipRta);

// module.exports = { flip };

// const getEvenNumbers = (numbersArray) => {
//   console.log(numbersArray);
//   return numbersArray.filter(numberPair => numberPair % 2 === 0);
// }
// console.log(getEvenNumbers([2,4,5,6]));

// module.exports = getEvenNumbers;