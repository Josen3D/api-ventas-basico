// import check from exprexx validator
import { check } from "express-validator";
// import validate results from ./src/utils
import { validateResults } from "../utils/validator.handler.js";

//Create validators for createOrder
export const validatorCreateOrder = [
  check("quantity").exists().notEmpty().isNumeric(),
  check("id_client").exists().notEmpty().isNumeric(),

  // validates the results of data
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

// create validators for getCLients
export const validatorGetOrder = [
  check("id").exists().notEmpty(),

  // validates the results of data
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];
