//import clients model
import ClientsModel from "../models/clients.model.js";

/**
 * Obtiene listado de registros en la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getAllClients = async () => {
  try {
    const responseGet = await ClientsModel.findAll({});
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
export const getOneClient = async (id) => {
  try {
    const responseGet = await ClientsModel.findOne({ where: { id } });
    return responseGet;
  } catch (error) {
    console.log("Error service " + error);
  }
};

/**
 * Pasar datos del cliente a registrar en la DB
 * @param {*} client
 * @returns
 */
export const createNewClient = async (client) => {
  try {
    const responseCreate = await ClientsModel.create(client);
    return responseCreate;
  } catch (error) {
    console.log("Error service " + error);
  }
};

/**
 * Pasar datos modificados del cliente y el id del cliente que se quiere actualizar
 * @param {*} client
 * @param {*} id
 * @returns
 */
export const updateOneClient = async (client, id) => {
  try {
    const responseUpdate = await ClientsModel.update(client, { where: { id } });
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
export const deleteOneCLient = async (id) => {
  try {
    const responseDelete = await ClientsModel.destroy({ where: { id } });
    return responseDelete;
  } catch (error) {
    console.log("Error service " + error);
  }
};
