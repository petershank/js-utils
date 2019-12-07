const isLeapYear = require('./isLeapYear.js');

test('recognizes leap years successfully', () => {
    expect(isLeapYear(1900)).toBe(false);
    expect(isLeapYear(1996)).toBe(true);
    expect(isLeapYear(1999)).toBe(false);
    expect(isLeapYear(2000)).toBe(true);
  });

  test('throws on string input', () => {
    expect(() => {
      isLeapYear('octopus');
    }).toThrow();
  });
    