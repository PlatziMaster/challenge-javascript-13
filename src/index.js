function print(a,b,c) {
  return `${a}->${b}->${c}`;
}

function flip(fn) {
  return function(){
    // Also can solve as:
    // return fn(...Array.from(arguments).reverse())
    const a = [
      fn(arguments[0])[0],
      fn(arguments[1])[0],
      fn(arguments[2])[0]
    ].reverse()
    return `${a[0]}->${a[1]}->${a[2]}`
  }
}

const normalRta = print(1,2,3); // 1->2->3
console.log(normalRta);
const flipRta = flip(print)(1,2,3); // 3->2->1
console.log(flipRta);

module.exports = { flip };