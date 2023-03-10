import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import 'dotenv/config';

import _initializePassport from './config/passport.js';

import authRouter from './routes/auth.js';
import notesRouter from './routes/notes.router.js';
import errorHandler from './middlewares/error.handler.js';

import connectDb from './database/database.connection.js';
import './database/database.connection.js';

import cors from 'cors';
connectDb();

const app = express();
const port = process.env.PORT || 8080;

app.use(cors('*'))
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/auth', authRouter);
app.use('/notes', notesRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`server is running on port ${port}`));
