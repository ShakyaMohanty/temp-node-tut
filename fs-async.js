const { readFile, writeFile } = require("fs");
// console.log(readFileSync);
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  // console.log(result);
  const readFirst = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const readSecond = result;

    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${readFirst} & ${readSecond}.`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
