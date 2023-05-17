// import sequelize connection
import { sequelize } from "../database/mysql.js";
// import DataTypes
import { DataTypes } from "sequelize";

// defines model
const Client = sequelize.define(
  "clients",
  {
    RFC: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
    fathers_lastname: {
      type: DataTypes.STRING,
    },
    mothers_lastname: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.TINYINT,
    },
  },
  {
    timestamps: true,
  }
);

//export model
export default Client;
