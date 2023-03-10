import passport from 'passport';
import jwt from 'jsonwebtoken';
import { sendSuccess } from '../utils/utility.js';
import { HTTPStatusCode } from '../utils/errors/http.status.code.js';
import { MESSAGES } from '../config/constants.js';
import { ApiError } from '../utils/errors/api.error.js';
import { ErrorCode } from '../utils/errors/error.code.js';


export const signUpUser = async (req, res, next) => {
  sendSuccess(res, MESSAGES.AUTH.SIGNUP_SUCCESS, HTTPStatusCode.OK, req.user);
};

export const loginUser = async (req, res, next) => {
  passport.authenticate('login', async (err, user, info) => {
    try {
      if (err || !user) {
        next(new ApiError(err.message, ErrorCode.InternalServerError ,HTTPStatusCode.InternalServerError));
      } else {
        req.login(user, { session: false }, async (error) => {
          if (error) return next(error);

          const body = { _id: user._id, email: user.email };
          const token = jwt.sign({ user: body }, 'TOP_SECRET');

          const _user = { ...req.user, token }

          sendSuccess(res, MESSAGES.AUTH.LOGIN_SUCCESS, HTTPStatusCode.OK, _user)
        });
      }
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
};
