// Escreva um algoritmo que percorra os números inteiros entre 1 e 250
// e verifique quais números são múltiplos de 3 e quais são múltiplos
// de 5.

for (let i = 1; i <= 250; i++) {
    if (i % 3 == 0) {
        console.log(`${i} é múltiplo de 3`)
    } else if (i % 5 == 0) {
        console.log(`${i} é múltiplo de 5`)
    } console.log(`${i}`)
}