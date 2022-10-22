function polindrom(string) {
  rev_string = string.split("").reverse().join("");
  return string.toLowerCase() == rev_string.toLowerCase();
}

console.log(polindrom("An na")); //true
console.log(polindrom("Johnny gooks they are in the trees")); //false
console.log(polindrom("asdf,.,fdsa")); //true
console.log(polindrom(" a a a ")); //true
console.log(polindrom("XxXxX")); //true
console.log(polindrom("free xxxx")); //false
console.log(polindrom("viagra")); //false
