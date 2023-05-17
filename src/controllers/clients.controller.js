// import client service
import {
  createNewClient,
  deleteOneCLient,
  getAllClients,
  getOneClient,
  updateOneClient,
} from "../services/clients.service.js";
// import matched data from express validator
import { matchedData } from "express-validator";
// import http error handler
import { handleHttpError } from "../utils/httpError.handler.js";

/**
 * Muestra listado de registros en la DB
 * @param {*} req
 * @param {*} res
 */
export const getClients = async (req, res) => {
  try {
    const response = await getAllClients();
    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_CLIENTS: " + error);
  }
};

/**
 * Muestra un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getClient = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const response = await getOneClient(id);

    //if response is null, the client doesnt exist
    if (!response) {
      handleHttpError(res, "CLIENT_NOT_FOUND", 404);
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_CLIENT: " + error);
  }
};

/**
 * Crea un nuevo registro en la DB
 * @param {*} req
 * @param {*} res
 */
export const createClient = async (req, res) => {
  try {
    const body = matchedData(req);
    const response = await createNewClient(body);
    res.status(201).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_CLIENT: " + error);
  }
};

/**
 * Actualiza un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateClient = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    const { id, ...body } = matchedData(req);
    const response = await updateOneClient(body, id);

    if (response <= 0) {
      handleHttpError(res, "CLIENT_NOT_FOUND ", 404);
      return;
    }

    const client = await getOneClient(id);

    res.status(200).json(client);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_CLIENT: " + error);
  }
};

/**
 * Elimina un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const deleteClient = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const response = await deleteOneCLient(id);

    if (response <= 0) {
      handleHttpError(res, "CLIENT_NOT_FOUND ", 404);
      return;
    }

    res.status(200).json({ message: "client deleted" });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_CLIENT: " + error);
  }
};
