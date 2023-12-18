// Desenvolva um algoritmo que mostre uma contagem regressiva de
// 30 até 1, marcando os números que forem primos, exatamente
// como mostrado abaixo:
// 30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...

for (let i = 30; i > 0; i--) {
    if (i % 2 == 0 || i % 3 == 0 || i === 1 || i % 5 == 0) {
        console.log(i)
        if (i === 2) {
            {console.log(`[${i}]`)}
        }
    } else {console.log(`[${i}]`)}
}
