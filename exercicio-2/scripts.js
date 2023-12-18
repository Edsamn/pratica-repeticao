// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

var alturaPedro = 1.5;
var alturaLucas = 1.1;
var anos = 0;

// Enquanto Lucas for menor ou igual a Pedro
for (; alturaLucas <= alturaPedro; anos++) {
  alturaPedro += 0.02;
  alturaLucas += 0.03;
}

console.log(
  `Serão necessários ${anos} anos para que Lucas e Pedro tenham o mesmo tamanho.`
);

// Enquanto Pedro for maior que Lucas
for (; alturaPedro > alturaLucas; anos++) {
  alturaPedro += 0.02;
  alturaLucas += 0.03;
}

console.log(
  `Serão necessários ${anos} anos para que Lucas seja mai
or que Pedro.`
);