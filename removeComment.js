exports.initRemov = function(file1) {
  for (i = 0; i < file1.length; i++) {
    if (file1[i] === "/" && file1[i + 1] === "/") {
      for (j = i; j < file1.length; j++) {
        if (file1[j] != "\n") {
          file1[j] = "";
          console.log(file1[j]);
        } else {
          j = file1.length;
        }
      }
    }
  }

  return file1;
};
