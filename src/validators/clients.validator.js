// import check from exprexx validator
import { check } from "express-validator";
// import validate results from ./src/utils
import { validateResults } from "../utils/validator.handler.js";

//Create validators for createClient
export const validatorCreateClient = [
  check("RFC").exists().notEmpty().isLength({ min: 10, max: 13 }),
  check("name").exists().notEmpty().isLength({ min: 3, max: 15 }),
  check("fathers_lastname").exists().notEmpty().isLength({ min: 3, max: 20 }),
  check("mothers_lastname").exists().notEmpty().isLength({ min: 3, max: 20 }),
  check("age").exists().notEmpty().isNumeric(),

  // validates the results of data
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

// create validators for getCLients
export const validatorGetClient = [
  check("id").exists().notEmpty(),

  // validates the results of data
  (req, res, next) => {
    return validateResults(req, res, next);
  },
];
