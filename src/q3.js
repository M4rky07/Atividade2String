// Exercicio 3
// Crie uma função que receba uma string e transforme em um array, onde cada elemento do array é uma palavra da string.

function TransformandoEmArray(str){ //CRiei uma função que recebe uma string
    return str.split(' ') // O metodo split divide a string em um array, onde cada elemento do array é uma palavra da string

}

console.log(TransformandoEmArray("Lucas, João, Maria, Pedro, Ana")); // O resultado esperado é ["Lucas,", "João,", "Maria,", "Pedro,", "Ana"]
console.log(TransformandoEmArray("Lucas João Maria Pedro Ana")); // O resultado esperado é ["Lucas,", "João,", "Maria,", "Pedro,", "Ana"]