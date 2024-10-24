import { DataTypes } from "sequelize";
import {sequelize} from "../config/postgresDb.js"


const Event = sequelize.define(
  'Event',
  {
    // Model attributes are defined here
    title: {
      type: DataTypes.STRING,
    },
    discription: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    }
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default Event;