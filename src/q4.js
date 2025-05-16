function cortarInicio(frase, quantidade) {
    return frase.substring(0, quantidade);
}

let resultado = cortarInicio("Júnior gomes", 6);
console.log(resultado); // O resultado esperado é "Júnior"
