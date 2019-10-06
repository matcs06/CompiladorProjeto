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
