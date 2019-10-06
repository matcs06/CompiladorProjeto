//Função que armazena cada linha em uma posição do vetor
const { caractersEspeciais } = require("./atribsDaLinguagem");

//Removedor de comentários
exports.removeComments = function(file1) {
  lines = file1.split("\n");
  result_without_comments = lines.map(item =>
    item.replace(new RegExp("//.+", ""), "")
  );

  return result_without_comments.join("\n");
};

//Removedor de espaços em branco
exports.removeWhiteSpace = function(file) {
  for (i = 0; i < file.length; i++) {
    if (file[i] == " ") {
      file[i] = "";
    }
  }

  return file;
};

//Separador de tockens
exports.separaTockens = function(arr1, arr2 = [""]) {
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

//Função para eliminar o \r e \n do final de cada linha
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

//Removendo espaço vazio
exports.removingEmptySpace = (arr, tokens) => {
  for (let i of arr) {
    i && tokens.push(i);
  }

  return tokens;
};
