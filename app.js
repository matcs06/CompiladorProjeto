let fs = require("fs"); //Biblioteca para leitura de arquivo
let lineArr = [""]; //Array para Guardar linhas

//Sessão de import de módulos
const breackLine = require("./breack.js"); //Importando o breack line

//Lendo o arquivo
try {
  var data = fs.readFileSync("TEST.cpp", "ascii");
} catch (err) {
  console.error("There was an error opening the file:");
  console.log(err);
}

//Posicionando cada linha do código em uma posição do vetor
let linhas = breackLine.quebraLinha(data, lineArr);

//Eliminado o \r no final de cada linha
linhas = breackLine.eliminaChar(linhas);

console.log(linhas);
