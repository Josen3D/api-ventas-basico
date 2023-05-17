// import dotenv config
import "dotenv/config";
// import express
import express from "express";
// import cors
import cors from "cors";

// import DB connection
import { dbConnect } from "./database/mysql.js";
// import clients routes
import clientRoutes from "./routes/clients.routes.js";

// create express app
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", clientRoutes);

// put server to listen
app.listen(PORT, () => console.log("Server running on port: " + PORT));
// connect to DB
dbConnect();
