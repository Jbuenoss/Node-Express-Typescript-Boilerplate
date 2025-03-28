import morgan from 'morgan';
import Logger from '../config/logger';
import { Response } from 'express';

const successResponseFormat = `method :url :status - :response-time ms`;
const errorResponseFormat = `method :url :status - :response-time ms - message: :message`;

morgan.token('message', (req, res: Response) => res.locals.errorMessage || '');

const successHandler = morgan(successResponseFormat, {
    skip: (req, res) => res.statusCode >= 400,
    stream: { write: (message) => Logger.info(message.trim()) },
});

const errorHandler = morgan(errorResponseFormat, {
    skip: (req, res) => res.statusCode < 400,
    stream: { write: (message) => Logger.error(message.trim()) },
});

export { successHandler, errorHandler };
