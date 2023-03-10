import fs from "fs";
import url from "url"

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const writeNotes = async (notes) => {
  notes = JSON.stringify(notes, null, 4);
  await fs.promises.writeFile(__dirname + "../notes/notes.store.json", notes, "utf8");
}

export default writeNotes;
