import { DataTypes, Sequelize } from "sequelize";
import { sequelize } from "../config/postgresDb.js";


const Event = sequelize.define("Events", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.TEXT,  // Corrected typo
    date: DataTypes.DATE,
  }, 
  {
    // tableName: 'Events',  // Correct case sensitivity if needed
  });
  
export default Event;