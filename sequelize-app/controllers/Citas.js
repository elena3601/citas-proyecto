// Import Product Model
import Citas from "../models/Citas.js";

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

 
// Get all products
export const getCitas = async (req, res) => {
    try {
        const citas = await Citas.findAll();
        res.send(citas);
    } catch (err) {
        logger.error('Hubo un error!');
        console.log(err);
    }
}
 
// Get product by id
export const getCitasById = async (req, res) => {
    try {
        const citas = await Citas.findAll({
            where: {
                id: req.params.id
            }
        });
        res.send(citas[0]);
    } catch (err) {
        
        console.log(err);
    }
}
 
// Create a new product
export const createCitas = async (req, res) => {
    try {
        await Citas.create(req.body);
        res.json({
            "message": "Cita Creada"
        });
    } catch (err) {
        logger.error('Hubo un error!');
        console.log(err);
    }
}
 
// Update product by id
export const updateCitas = async (req, res) => {
    try {
        await Citas.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Cita actualizada"
        });
    } catch (err) {
        logger.error('Hubo un error!');
        console.log(err);
    }
}
 
// Delete product by id
export const deleteCitas = async (req, res) => {
    try {
        await Citas.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Cita Borrada"
        });
    } catch (err) {
        logger.error('Hbo un error!');
        console.log(err);
    }
}