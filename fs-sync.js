/** this is Sync process of reading and writing  */

const { readFileSync, writeFileSync } = require("fs");
// console.log(readFileSync);
const readFirst = readFileSync("./content/first.txt", "utf-8");
// console.log(readFirst);
const readSecond = readFileSync("./content/second.txt", "utf-8");

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${readFirst} & ${readSecond}.`
);
writeFileSync(
  "./content/result-sync2.txt",
  `Here is the result: ${readFirst} & ${readSecond}.`,
  { flag: "a" } // a is for appending
);
