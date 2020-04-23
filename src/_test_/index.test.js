const { flip } = require ('../index');

describe('flip', () => {

  it('should return reverse print', () => {
    function print(a,b,c) {
      return `${a}->${b}->${c}`;
    }
    expect(print(1,2,4)).toBe('1->2->4');
    expect(flip(print)(1,2,4)).toBe('4->2->1');
  });

});
