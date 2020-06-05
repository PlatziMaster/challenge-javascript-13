const flip = (fn) => (a, b, c) => fn(c, b, a);

module.exports = { flip };