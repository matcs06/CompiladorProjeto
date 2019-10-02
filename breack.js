//Função que armazena cada linha em uma posição do vetor
const { caractersEspeciais } = require("./atribsDaLinguagem");

exports.quebraLinha = function(arr1, arr2 = [""]) {
  let count = 0;

  for (i = 0; i < arr1.length; i++) {
    if (caractersEspeciais.indexOf(arr1[i]) === -1) {
      arr2[count] += arr1[i];
    } else {
      //Assinalando valor para a primeira posição de cada linha para tirar o undef

      count++;
      arr2[count] = arr1[i];
      count++;
      arr2[count] = "";
    }
  }
  return arr2;
};

//Função para eliminar o \r do final de cada linha
exports.eliminaChar = arr => {
  function removeChar(item, index, array) {
    for (i = 0; i < item.length; i++) {
      if (item[i] == "\n" || item[i] == "\r") {
        item = item.replace(/(\r\n|\n|\r)/gm, "");
      }
    }
    array[index] = item;
  }

  arr.forEach(removeChar);

  return arr;
};

//Tratando o array
exports.removingEmptySpace = (arr, tokens) => {
  for (let i of arr) {
    i && tokens.push(i);
  }

  return tokens;
};
