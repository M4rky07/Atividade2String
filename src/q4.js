// Exercicio 4

function cortarInicio(frase, quantidade) {
    return frase.substring(0, quantidade); // O metodo substring retorna uma parte da string, começando do índice 0 até o índice quantidade
}

let resultado = cortarInicio("Júnior gomes", 6); // junior gomes equivale ao parametro frase e 6 equivale ao parametro quantidade

console.log(resultado); // O resultado esperado é "Júnior"
