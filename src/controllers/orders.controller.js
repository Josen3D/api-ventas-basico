// import client service
import {
  getAllOrders,
  getOneOrder,
  createNewOrder,
  updateOneOrder,
  deleteOneOrder,
} from "../services/orders.service.js";
// import matched data from express validator
import { matchedData } from "express-validator";
// import http error handler
import { handleHttpError } from "../utils/httpError.handler.js";

/**
 * Muestra listado de registros en la DB
 * @param {*} req
 * @param {*} res
 */
export const getOrders = async (req, res) => {
  try {
    const response = await getAllOrders();
    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ORDERS: " + error);
  }
};

/**
 * Muestra un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const getOrder = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const response = await getOneOrder(id);

    //if response is null, the client doesnt exist
    if (!response) {
      handleHttpError(res, "ORDER_NOT_FOUND", 404);
      return;
    }

    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ORDER: " + error);
  }
};

/**
 * Crea un nuevo registro en la DB
 * @param {*} req
 * @param {*} res
 */
export const createOrder = async (req, res) => {
  try {
    const body = matchedData(req);
    const response = await createNewOrder(body);
    res.status(201).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ORDER: " + error);
  }
};

/**
 * Actualiza un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateOrder = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    const { id, ...body } = matchedData(req);
    const response = await updateOneOrder(body, id);

    if (response <= 0) {
      handleHttpError(res, "ORDER_NOT_FOUND ", 404);
      return;
    }

    const order = await getOneOrder(id);

    res.status(200).json(order);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_ORDER: " + error);
  }
};

/**
 * Elimina un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const deleteOrder = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const response = await deleteOneOrder(id);

    if (response <= 0) {
      handleHttpError(res, "ORDER_NOT_FOUND ", 404);
      return;
    }

    res.status(200).json({ message: "order deleted" });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ORDER: " + error);
  }
};
