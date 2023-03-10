import { validationResult } from "express-validator"
import { MESSAGES } from "../config/constants.js";
import { sendError } from "../utils/utility.js";

const handleValidations = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty())
        sendError(res, MESSAGES.VALIDATION.INVALID_PARAMETERS, errors.array({onlyFirstError: true}));
    else
        next();
}
export default handleValidations;
