const { tokens } = require("./app");
const { table } = require("./table");
const {
  reservedWords,
  delDeInicioEfim,
  operadorComparativo,
  operadoresMath
} = require("./atribsDaLinguagem");
console.log(operadoresMath);
//Palavras reservadas
for (i in tokens) {
  if (reservedWords.indexOf(tokens[i]) != -1) {
    table.palavraReservada.push(tokens[i]);
  } else if (delDeInicioEfim.indexOf(tokens[i]) != -1) {
    if (tokens[i] == "<" || tokens[i] == ">") {
      if (table.palavraReservada.length == 0) {
        table.DelimitadorDeInicioEfim.push(tokens[i]);
      } else {
        table.operadorComparativo.push(tokens[i]);
      }
    } else {
      table.DelimitadorDeInicioEfim.push(tokens[i]);
    }
  } else {
    if (operadorComparativo.indexOf(tokens[i]) != -1) {
      table.operadorComparativo.push(tokens[i]);
    } else if (operadoresMath.indexOf(tokens[i] != -1)) {
      table.operadoresMath.push(tokens[i]);
    }
  }
}

console.log(table);
