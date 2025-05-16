//Utilizaremos o metodo typeof para verificar o tipo de dado se é string ou não
//O operador typeof retorna uma string indicando o tipo do dado
let verificacaoString = str => typeof str === 'string'; //utilizei uma arrow function para simplificar o código
//O operador === compara o valor e o tipo do dado, se for igual retorna true, caso contrário retorna false


// Testes
console.log(verificacaoString('Boa noite')); // true
console.log(verificacaoString(5364)) // false
console.log(verificacaoString("m4rk")) // true
console.log(verificacaoString('4321')) // true
