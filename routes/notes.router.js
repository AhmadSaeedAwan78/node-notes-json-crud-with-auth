import express from "express"

import passport from "passport";

import validate from "../middlewares/validation.js";
import handleValidations from "../middlewares/handleValidations.js";
import authorizeNote from "../middlewares/authorizeNote.js";

import {
  getNotes,
  getNoteById,
  createNote,
  updateNote,
  deleteNoteById
} from "../contollers/index.js"

const notesRouter = express.Router();

notesRouter.get("/", passport.authenticate('jwt', {session: false}), getNotes);
notesRouter.get("/:id", passport.authenticate('jwt', {session: false}), validate('getNoteById'), handleValidations, getNoteById);
notesRouter.post("/", passport.authenticate('jwt', {session: false}), validate('createNote'), handleValidations, createNote);
notesRouter.put("/:id", passport.authenticate('jwt', {session: false}), validate('updateNote'), handleValidations, authorizeNote('put'), updateNote)
notesRouter.delete("/:id", passport.authenticate('jwt', {session: false}), validate('deleteNoteById'), handleValidations, deleteNoteById);

export default notesRouter;
