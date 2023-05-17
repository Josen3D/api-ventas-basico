//import clients model
import OrderModel from "../models/orders.model.js";

/**
 * Obtiene listado de registros en la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getAllOrders = async () => {
  try {
    const responseGet = await OrderModel.findAll({});
    return responseGet;
  } catch (error) {
    console.log("Error Service: " + error);
  }
};

/**
 * Pasar id del registro a buscar en la DB
 * @param {*} id
 * @returns
 */
export const getOneOrder = async (id) => {
  try {
    const responseGet = await OrderModel.findOne({ where: { id } });
    return responseGet;
  } catch (error) {
    console.log("Error service " + error);
  }
};

/**
 * Pasar datos del registro a crear en la DB
 * @param {*} order
 * @returns
 */
export const createNewOrder = async (order) => {
  try {
    const responseCreate = await OrderModel.create(order);
    return responseCreate;
  } catch (error) {
    console.log("Error service " + error);
  }
};

/**
 * Pasar datos modificados del registro y el id del registro que se quiere actualizar
 * @param {*} order
 * @param {*} id
 * @returns
 */
export const updateOneOrder = async (order, id) => {
  try {
    const responseUpdate = await OrderModel.update(order, { where: { id } });
    return responseUpdate;
  } catch (error) {
    console.log("Error service " + error);
  }
};

/**
 * Pasar id del cliente que se quiere eliminar
 * @param {*} id
 * @returns
 */
export const deleteOneOrder = async (id) => {
  try {
    const responseDelete = await OrderModel.destroy({ where: { id } });
    return responseDelete;
  } catch (error) {
    console.log("Error service " + error);
  }
};
