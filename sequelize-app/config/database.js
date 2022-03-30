// import sequelize
import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('sequelize_db', 'root', 'Ele0306#', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306,
});
 
// export connection
export default db;