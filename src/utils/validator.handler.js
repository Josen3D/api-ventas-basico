// import validation result from express validator
import { validationResult } from "express-validator";

// validates if data results are correct
export const validateResults = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next(); // continues to controller
  } catch (error) {
    res.status(403);
    res.send({ errors: error.array() });
  }
};
