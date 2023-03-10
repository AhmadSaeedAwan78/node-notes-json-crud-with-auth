import fs from "fs";
import url from "url"

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const readNotes = async () => {

  let notes = await fs.promises.readFile(__dirname + "../notes/notes.store.json");
  notes = JSON.parse(notes);
  return notes;
}

export default readNotes;
