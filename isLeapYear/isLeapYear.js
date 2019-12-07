function isLeapYear(year)
{
  if (typeof year === 'string') {
    throw new console.error('expected number, got string');
  }

  return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

module.exports = isLeapYear;
