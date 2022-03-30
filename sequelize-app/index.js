// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import router
import Router from "./routes/routes.js";

import winston, { transports } from "winston";

const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
    level: 'info',
    format: combine( timestamp(),json() ),
    transports: [
        new winston.transports.File({
            filename: 'logs/bitacora.log'
        }),
        new winston.transports.File({
            filename: 'logs/app-error.log',
            level: 'error'
        }),
        new winston.transports.File({
            filename: 'logs/app-warn.log',
            level: 'warn'
        })
    ]
});

//logger.info('Info mesage');
//logger.error('Error mesage');
//logger.warn('Warning mesage');

// Init express
const app = express();
// use express json
app.use(express.json());
// use cors
app.use(cors());
 
// Testing database connection 
try {
    await db.authenticate();
    logger.info('Connection has been established successfully.');
    console.log('Connection has been established successfully.');
} catch (error) {
    logger.error('Unable to connect to the database:');
    console.error('Unable to connect to the database:', error);
}
 
// use router
app.use(Router);
 
// listen on port
app.listen(5000, () => console.log('Server running at http://localhost:5000'))