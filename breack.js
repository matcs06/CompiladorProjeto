//Função que armazena cada linha em uma posição do vetor
exports.quebraLinha = function(arr1, arr2 = [""]) {
  let count = 0;

  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] != " ") {
      arr2[count] += arr1[i];
    } else {
      //Assinalando valor para a primeira posição de cada linha para tirar o undef
      count++;
      arr2[count] = "";
    }
  }
  return arr2;
};

//Função para eliminar o \r do final de cada linha
exports.eliminaChar = arr => {
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i].replace("\n", "");
  }
  return arr;
};
