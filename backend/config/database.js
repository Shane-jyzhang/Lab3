import { Sequelize } from "sequelize";
 
const db = new Sequelize('mern_db', 'root', 'Zz991004', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;