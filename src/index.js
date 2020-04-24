/**
 * flip arguments
 * @param {Function} fn 
 * @returns {Function}
 */
const flip = (fn) => (...arg) => fn(...arg.reverse());

module.exports = { flip };