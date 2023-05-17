// import Router from express
import { Router } from "express";
// import clients controller
import {
  getClients,
  getClient,
  createClient,
  updateClient,
  deleteClient,
} from "../controllers/clients.controller.js";
// import client validators
import {
  validatorCreateClient,
  validatorGetClient,
} from "../validators/clients.validator.js";

// create router
const router = Router();

router
  .get("/clients", getClients)
  .get("/clients/:id", validatorGetClient, getClient)
  .post("/clients", validatorCreateClient, createClient)
  .put("/clients/:id", validatorGetClient, validatorCreateClient, updateClient)
  .delete("/clients/:id", validatorGetClient, deleteClient);

export default router;
