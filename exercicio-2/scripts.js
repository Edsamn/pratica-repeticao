// Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
// Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
// Construa um algoritmo que calcule e imprima quantos anos serão
// necessários para que:
// a. Lucas e Pedro tenham o mesmo tamanho;
// b. Lucas seja maior que Pedro.

let pedro = 1.5;
let lucas = 1.1;

// for (let anos = 0; lucas <= pedro; anos++) { 
//   pedro += 0.02;
//   lucas += 0.03;
//   console.log(anos)
// }

for (let anos = 0; lucas < pedro; anos++) {
  pedro += 0.02;
  lucas += 0.03;
  console.log(anos)
}