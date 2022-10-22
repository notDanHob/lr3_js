function dividers(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) console.log("fuzzbuzz");
    else if (i % 3 == 0) console.log("fuzz");
    else if (i % 5 == 0) console.log("buzz");//beeautiful
    else console.log(i);
  }
}
console.log("for 3:\n");
dividers(3);
console.log("for 15:\n");
dividers(15);
console.log("for -3:\n");
dividers(-3); //ничего не выводит, так как не запускается цикл,  ибо он начинается с i = 1
