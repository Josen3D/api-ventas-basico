// import Router from express
import { Router } from "express";
// import clients controller
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orders.controller.js";
// import client validators
import {
  validatorCreateOrder,
  validatorGetOrder,
} from "../validators/orders.validator.js";

// create router
const router = Router();

router
  .get("/orders", getOrders)
  .get("/orders/:id", validatorGetOrder, getOrder)
  .post("/orders", validatorCreateOrder, createOrder)
  .put("/orders/:id", validatorGetOrder, validatorCreateOrder, updateOrder)
  .delete("/orders/:id", validatorGetOrder, deleteOrder);

export default router;
