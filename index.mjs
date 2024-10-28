import sharp from "sharp";
import { readFile } from "node:fs/promises";
(async () => {
  const inputBuffer = await readFile("./example.svg");
  const sharpObject = sharp(inputBuffer);

  let buffer = await sharpObject
    .flatten({ background: "#fff" })
    .toFormat("jpg")
    .toBuffer();

  console.log(buffer);
})();
