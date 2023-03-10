import { v4 as uuid } from "uuid";
import fs from "fs";
import writeNotes from "../helpers/writeNotes.js";
import readNotes from "../helpers/readNotes.js";
import url from "url";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

class NotesService {
  async saveNote(noteData, userId) {
    const note = {
      id: uuid(),
      title: noteData.title,
      content: noteData.content,
      user_id: userId
    }
    let notes = await fs.promises.readFile(__dirname + "../notes/notes.store.json", "utf8");
    if(notes){
      notes = JSON.parse(notes);
      notes.push(note);
      await writeNotes(notes);
      return note;
    }
    else if(!notes) {
      let notes = [];
      notes.push(note);
      writeNotes(notes);
      return note;
    }
  }

  async getAllNotes() {
    let notes = await readNotes();
    return notes;
  }

  async getNoteById(noteId) {
    let notes = await readNotes();
    notes = notes.filter(note => note.id === noteId);
    if(notes.length)
      return notes[0];
    else
      return {};
  }

  async updateNoteById(noteId, noteData) {
    let updatedNote;
    let isUpdated = false;
    let notes = await readNotes();
    notes = notes.map((note) => {
      if(note.id === noteId) {
        isUpdated = true;
        if(noteData.title)
          note.title = noteData.title;
        if(noteData.content)
          note.content = noteData.content;
        updatedNote = note;
      }
      return note;
    })
    if(isUpdated) {
      await writeNotes(notes);
      return updatedNote;
    }
    else
      return {}
  }

  async deleteNoteById(noteId) {
    let notes = await readNotes();
    const deletedNote = notes.filter(note => note.id === noteId);
    if(deletedNote.length) {
      notes = notes.filter(note => note.id !== noteId);
      writeNotes(notes);
      return deletedNote[0];
    }
    else {
      return {};
    }
  }
}
export default new NotesService();

