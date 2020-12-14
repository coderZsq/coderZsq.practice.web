function StringToNumber(string) {
  return Number(string);
}

function NumberToString(number) {
  return number + '';
}

console.log(typeof (StringToNumber('123456')));
console.log(StringToNumber('123456'));

console.log(typeof (NumberToString(123456)));
console.log(NumberToString(123456));