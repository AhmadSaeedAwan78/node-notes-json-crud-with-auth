import jwt_decode from 'jwt-decode'
import { MESSAGES } from '../config/constants.js';
import readNotes from '../helpers/readNotes.js';
import { HTTPStatusCode } from '../utils/errors/http.status.code.js';
import { sendError } from '../utils/utility.js';

const authorizeNote = (httpMethod) => {
    return async (req, res, next) => {
        switch(httpMethod){
          case 'put': {
            const token = req.headers['secret_token'];
            const decodedUser = jwt_decode(token).user;

            let notes = await readNotes();
            let noteToUpdate = notes.filter(note => note.id === req.params.id);
            if(!noteToUpdate.length)
              sendError(res, MESSAGES.NOTES.NOTE_NOT_FOUND, [], HTTPStatusCode.NotFound);
            else if(noteToUpdate[0].user_id === decodedUser._id.toString())
              next();
            else
              sendError(res, MESSAGES.AUTH.UNAUTHORIZED, [], HTTPStatusCode.Unauthorized);
            break;
          }
        }
    }
}
export default authorizeNote;
