let Parser = require("rss-parser");
const fs = require("fs");

let parser = new Parser();

(async () => {
  let feed = await parser.parseURL("https://medium.com/feed/@radhika.s_76503");
  writeFile("public/feeds/medium.json", feed);
})();

async function writeFile(filename, writedata) {
  try {
    await fs.promises.writeFile(
      filename,
      JSON.stringify(writedata, null, 4),
      "utf8"
    );
    console.log("data is written successfully in the file");
  } catch (err) {
    console.log("not able to write data in the file ");
  }
}
