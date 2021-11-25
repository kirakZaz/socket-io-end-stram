const fs = require("fs");
const zlib = require("zlib");

const main = () => {
  const r = fs.createReadStream("book.txt.gz");
  const z = zlib.createGunzip();
  const w = fs.createWriteStream("unzippedBook.txt");

  r.pipe(z).pipe(w);
};

main();
