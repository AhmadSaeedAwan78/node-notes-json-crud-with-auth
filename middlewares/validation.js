import { body, param } from 'express-validator';

const validate = (method) => {
  switch (method) {
    case 'loginUser': {
      return [
        body('email', 'email does not exist').exists(),
        body('email', 'email is empty').notEmpty(),
        body('email', 'email is invalid').isEmail(),
        body('password', 'password does not exist').exists(),
        body('password', 'password is empty').notEmpty(),
        body('password', 'password is not a string').isString(),
      ];
    }
    case 'createNote': {
      return [
        body('title', "title does not exist").exists(),
        body('title', "title is empty").notEmpty(),
        body('title', "title is not a string").isString(),
        body('content', "content does not exist").exists(),
        body('content', "content is empty").notEmpty(),
        body('content', "content is not a string").isString(),
      ]
    }
    case 'getNoteById': {
      return [
        param('id', 'note id is not a valid uuid').isUUID()
      ]
    }
    case 'deleteNoteById': {
      return [
        param('id', 'note id is not a valid uuid').isUUID()
      ]
    }
    case 'updateNote': {
      return [
        param('id', 'note id is not a valid uuid').isUUID(),
        body('title', "title doesn't exist").exists().optional(),
        body('title', 'title is empty').notEmpty().optional(),
        body('title', 'title is not a string').isString().optional(),
        body('content', "content doesn't exist").exists().optional(),
        body('content', 'content is empty').notEmpty().optional(),
        body('content', 'content is not a string').isString().optional(),
      ]
    }
  }
};

export default validate;
