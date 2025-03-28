import winston from 'winston';

const { combine, timestamp, printf, colorize, align } = winston.format;

const logFormat = printf((info) => `[${info.timestamp}] - ${info.level}: ${info.message}`);

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss',
        }),
        align(),
        logFormat,
    ),
    transports: [
        new winston.transports.Console({
            format: combine(colorize({ all: true }), logFormat),
        }),
        new winston.transports.File({ filename: 'logs/all.log' }),
    ],
});

export default logger;
