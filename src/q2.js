const vazio = function EspacoVazio(str){
    //O método trim() remove os espaços em branco do início e do fim de uma string
    //O operador === compara o valor e o tipo do dado, se for igual retorna true, caso contrário retorna false
    return str.trim() === '' ? true : false;
};

console.log(vazio(' ')); // true
console.log(vazio('ABC')); // false
console.log(vazio(' 123 ')); // false
console.log(vazio('')); // true