exports.reservedWords = [
  "break",
  "case",
  "char",
  "const",
  "do",
  "double",
  "else",
  "float",
  "for",
  "if",
  "int",
  "return",
  "switch",
  "void",
  "while"
];

exports.delDeInicioEfim = ["[", "]", "(", ")", "{", "}", "<", ">"];

exports.operadorComparativo = [">=", "<=", "!=", "="];

exports.operadoresMath = ["+", "-", "/", "*"];
//Para separar tockens
exports.caractersEspeciais = [
  "[",
  "]",
  "(",
  ")",
  "{",
  "}",
  "<",
  ">",
  ";",
  ",",
  " ",
  "=",
  "!",
  "|",
  "*",
  "-",
  "*",
  "/",
  "#",
  '"',
  "\n",
  "\r"
];

console.log(this.delimitadoreDeInicioEfim);

//Código para separar tokens
exports.separaTokens = function(arr1, arr2 = [""]) {
  let count = 0;
  let commaCount = 0;
  for (i = 0; i < arr1.length; i++) {
    if (caractersEspeciais.indexOf(arr1[i]) === -1) {
      arr2[count] += arr1[i];
    } else {
      //Colocando constante literais em uma unica posição - o que está ente ""
      if (arr1[i] == '"') {
        count++;
        arr2[count] = '"';
        do {
          i++;
          arr2[count] += arr1[i];
        } while (arr1[i] != '"');
        //Se não for constante literal vai para outra posição
      } else {
        count++;
        arr2[count] = arr1[i];
        count++;
        arr2[count] = "";
      }
    }
  }
  return arr2;
};