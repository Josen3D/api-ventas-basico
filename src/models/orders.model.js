// import sequelize connection
import { sequelize } from "../database/mysql.js";
// import DataTypes
import { DataTypes } from "sequelize";
// import clients model
import Clients from "../models/clients.model.js";

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

Order.belongsTo(Clients, {
  foreignKey: "id_client",
  as: "cliente",
});

Order.findAllData = function () {
  return Order.findAll({ include: "cliente" });
};

Order.findOneData = function (id) {
  return Order.findOne({ where: { id }, include: "cliente" });
};
//export model
export default Order;
