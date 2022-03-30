// import sequelize 
import { Sequelize, DataTypes } from "sequelize";
// import connection 
import db from "../config/database.js";
// init DataTypes
 
// Define schema
const Citas = db.define('citas', {
  // Define attributes
  nombre: {
    type: DataTypes.STRING
  },
  fecha: {
    type: DataTypes.DATE
  },
  hora:{
    type: DataTypes.TIME
  },
  asunto: {
    type: DataTypes.STRING
  }
},{
  // Freeze Table Name
  freezeTableName: true
});
 
// Export model Product
export default Citas;