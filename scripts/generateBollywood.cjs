const fs = require("fs");
const path = require("path");

const outputDir = path.join(
  __dirname,
  "..",
  "src",
  "data",
  "words",
  "bollywood"
);

function writeDeck(filename, words) {
  const content = `export default [
${words.map((word) => `  { word: "${word}" },`).join("\n")}
];
`;

  fs.writeFileSync(
    path.join(outputDir, filename),
    content,
    "utf8"
  );

  console.log(`✅ Created ${filename}`);
}

console.log("Bollywood Deck Generator Ready");