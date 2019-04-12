function convertBinary(num, pow) {
  for (var i = 2; i <= 9; i++) {
    if (num < 0 || num.includes(i)) return 'Your input is not a valid binary.';
  }
  if (num == '') return 0;
  return (num.startsWith(1) ? pow + convertBinary(num.substr(1, num.length - 1), pow / 2) : 0 + convertBinary(num.substr(1, num.length - 1), pow / 2));
}

function convertDecimal(num) {
  if (num < 0) return 'Your input is not a valid decimal.';
  if (num == 1) return '1';
  return convertDecimal(Math.trunc(num / 2)).concat(num % 2);
}