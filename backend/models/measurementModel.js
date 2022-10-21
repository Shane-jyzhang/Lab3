import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Measurement = db.define('measurement',{
    temperature:{
        type: DataTypes.DOUBLE
    },
    unix_timestamp:{
        type: DataTypes.DATE
    }
},{
    freezeTableName: true
});
 
export default Measurement;