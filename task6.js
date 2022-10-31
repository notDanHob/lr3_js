function find(str) {
    n = 0;
    alphabet = ['a','e','i','o','u','y']
    str = str.toLowerCase();
    alphabet.forEach(element => {
        n += str.split(element).length - 1
    });
    return n;
}

console.log(find('Hello, World!'));//3
console.log(find('HEllO, WOrld!'));//3
console.log(find('1 n33d s0m31'));//0