import { MESSAGES } from "../config/constants.js";
import { HTTPStatusCode } from "../utils/errors/http.status.code.js";
import { sendError } from "../utils/utility.js";

const errorHandler = (err, req, res, next) => {
  return sendError(res, MESSAGES.CATCHED_ERROR.GENERAL, err, HTTPStatusCode.InternalServerError);
};
export default errorHandler;
