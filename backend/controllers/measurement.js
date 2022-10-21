import Measurement from "../models/measurementModel.js";
//const { QueryTypes } = require('sequelize');
//import QueryTypes from 'sequelize'
export const getAllmeasurement = async (req, res) => {
    try {
        /* const measurement = await Measurement.sequelize.query(
            "SELECT * FROM measurement order by id DESC limit 2", 
            { type: QueryTypes.SELECT }
        ); */
        const measurement = await Measurement.findAll(
            {
                order: [['id', 'DESC']],
                limit : 5
            }
        )
        res.json(measurement);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getAverage = async (req, res) => {
    try {
        const measurement = await Measurement.findAll(AVG)
        res.json(measurement);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getMeasurementById = async (req, res) => {
    try {
        const measurement = await Measurement.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(measurement[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createMeasurement = async (req, res) => {
    try {
        await Measurement.create(req.body);
        res.json({
            "message": "Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateMeasurement = async (req, res) => {
    try {
        await Measurement.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteMeasurement = async (req, res) => {
    try {
        await Measurement.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}