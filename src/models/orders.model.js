// import sequelize connection
import { sequelize } from "../database/mysql.js";
// import DataTypes
import { DataTypes } from "sequelize";

// defines model
const Order = sequelize.define(
  "orders",
  {
    quantity: {
      type: DataTypes.DECIMAL,
    },
    id_client: {
      type: DataTypes.TINYINT,
    },
  },
  {
    timestamps: true,
  }
);

//export model
export default Order;
