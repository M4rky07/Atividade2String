function AbreviNome(nome) {
  const ParteNome = nome.split(" "); // Divide o nome em partes usando o espaço como delimitador
  // O método split() divide uma string em um array de substrings, usando o espaço como delimitador
  if (ParteNome.length < 2) // Verifica se o nome tem menos de 2 partes
    return nome; // Retorna o nome original se não tiver sobrenome
  const PrimeiroNome = ParteNome[0]; // Pega o primeiro nome
  const UltimoNomeIni = ParteNome[ParteNome.length - 1][0]; // Pega a primeira letra do último nome
    // O método length retorna o número de elementos do array
  return `${PrimeiroNome} ${UltimoNomeIni}.`; // Retorna o primeiro nome e a primeira letra do último nome com um ponto
}

console.log(AbreviNome("Rhavy Maia Guedes")); // O resultado esperado é "Rhavy G."


