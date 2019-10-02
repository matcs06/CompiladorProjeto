let fs = require("fs"); //Biblioteca para leitura de arquivo
let lineArr = [""]; //Array para Guardar linhas
let tokenArr = [];
//Sessão de import de módulos
const { quebraLinha, removingEmptySpace, eliminaChar } = require("./breack.js"); //Importando o breack line
const removeComment = require("./removeComment.js");

//Lendo o arquivo
try {
  var data = fs.readFileSync("TEST.cpp", "ascii");
} catch (err) {
  console.error("There was an error opening the file:");
  console.log(err);
}

//Posicionando cada linha do código em uma posição do vetor
lineArr = quebraLinha(data, lineArr);

//Eliminado o \r no final de cada linha
lineArr = eliminaChar(lineArr);

//Array pronto
tokenArr = removingEmptySpace(lineArr, tokenArr);

console.log(tokenArr);
