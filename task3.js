function random(min, max) {
  return Math.random() * (max - min) + min;
}

console.log(random(1, 5));
console.log(random(1, 2));
console.log(random(-1, 1));
console.log(random(1, 1)); //возвращает минимум при одинаковых значениях
console.log(random(3, 1)); //возвращает значение как обычная функция, ибо мин уберает минус из разницы max - min
console.log(random(1, -1)); //так же работает нормально по принципу прошлого
