import url from "url"

import notesService from '../services/notes.service.js'
import { sendSuccess } from "../utils/utility.js";
import { MESSAGES } from "../config/constants.js"
import { HTTPStatusCode } from "../utils/errors/http.status.code.js";

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

export const getNotes = async (req, res, next) => {
  try{
    let notes = await notesService.getAllNotes();
    sendSuccess(res, MESSAGES.NOTES.NOTES_FETCHED, 200, notes);
  }
  catch(err) {
    next(err);
  }
}

export const getNoteById = async (req, res, next) => {
  try{
    let note = await notesService.getNoteById(req.params.id);
    if(Object.keys(note).length)
      sendSuccess(res, MESSAGES.NOTES.NOTE_FETCHED, HTTPStatusCode.OK, note);
    else
      sendSuccess(res, MESSAGES.NOTES.NOTE_NOT_FOUND, HTTPStatusCode.NotFound, note);
  }
  catch(err) {
    next(err);
  }
}

export const createNote = async (req, res, next) => {
  try{
    let savedNote = await notesService.saveNote(req.body, req.user.user._id);
    sendSuccess(res, MESSAGES.NOTES.NOTE_CREATED, HTTPStatusCode.Created, savedNote);
  }
  catch(err){
    next(err);
  }
}

export const updateNote = async (req, res, next) => {
  try {
    let updatedNote = notesService.updateNoteById(req.params.id, req.body);
    if(Object.keys(updatedNote).length)
      sendSuccess(res, MESSAGES.NOTES.NOTE_UPDATED, HTTPStatusCode.Created, updatedNote);
    else
      sendSuccess(res, MESSAGES.NOTES.NOTE_NOT_FOUND, HTTPStatusCode.NotFound, updatedNote);
  }
  catch(err) {
    next(err);
  }
}

export const deleteNoteById = async (req, res, next) => {
  try {
    let deletedNote = await notesService.deleteNoteById(req.params.id);
    if(Object.keys(deletedNote).length)
      sendSuccess(res, MESSAGES.NOTES.NOTE_DELETED, HTTPStatusCode.OK, deletedNote);
    else
      sendSuccess(res, MESSAGES.NOTES.NOTE_DELETED, HTTPStatusCode.NotFound, deletedNote);
  }
  catch(err) {
    next(err);
  }

}
