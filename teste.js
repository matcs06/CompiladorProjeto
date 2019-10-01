var file1 = "//comettario \n #include <stdio.h>";
var file2 = "";

for (i = 0; i < file1.length; i++) {
  if (file1[i] === "/" && file1[i + 1] === "/") {
    for (j = i; j < file1.length; j++) {
      if (file1[j] != "\n") {
        file2 += file1[j];
      } else {
        j = file1.length;
      }
    }
  }
}

console.log(file2);
