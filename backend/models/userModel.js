import { DataTypes } from "sequelize";
import {sequelize} from "../config/postgresDb.js"


const User = sequelize.define(
  'User',
  {
    // Model attributes are defined here
    userName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
);

export default User;