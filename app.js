let fs = require("fs"); //Biblioteca para leitura de arquivo
let lineArr = [""]; //Array para Guardar linhas
let tokenArr;

//Sessão de import de módulos do stringHandler
const {
  separaTokens,
  removingEmptySpace,
  eliminaChar,
  removeComments,
  removeWhiteSpace,
  separaLinhas
} = require("./stringHandler");

//Lendo o arquivo
try {
  var data = fs.readFileSync("TEST.cpp", "ascii");
} catch (err) {
  console.error("There was an error opening the file:");
  console.log(err);
}

data = removeComments(data);

data = separaLinhas(data, lineArr)

//Posicionando cada tocken em uma posição do vetor


//lineArr = separaTockens(data, lineArr);

//Eliminado o \r no final de cada linha
//lineArr = eliminaChar(lineArr);

//lineArr = removeWhiteSpace(lineArr);

//Array pronto
//tokenArr = removingEmptySpace(lineArr, tokenArr);

console.log(data);

exports.tokens = tokenArr;
