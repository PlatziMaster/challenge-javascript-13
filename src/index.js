function print(a,b,c) {
  return `${a}->${b}->${c}`;
}

function flip(fn) {
  return function(){
    let flipElements = '';
    for(let i = arguments.length-1; i >= 0; i--){
      if(i === 0){
        flipElements += `${arguments[i]}`;
      }else{
        flipElements += `${arguments[i]}->`;
      }
    }
    return flipElements;
  }
}

const normalRta = print(1,2,3); // 1->2->3
console.log(normalRta);
const flipRta = flip(print)(1,2,3); // 3->2->1
console.log(flipRta);
module.exports = { flip };