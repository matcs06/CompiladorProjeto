let fs = require("fs");
let lineArr = [""]; //Array para Guardar linhas
let count = 0; //Contador de linhas

//Lendo o arquivo
try {
  var data = fs.readFileSync("TEST.cpp", "ascii");
} catch (err) {
  console.error("There was an error opening the file:");
  console.log(err);
}

//Quebrando as linhas
for (i = 0; i < data.length; i++) {
  if (data[i] != "\n") {
    lineArr[count] += data[i];
  } else {
    //Assinalando valor para a primeira posição de cada linha para tirar o undef
    count++;
    lineArr[count] = "";
  }
}

console.log(lineArr);
console.log(count);
