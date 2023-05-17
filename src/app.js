// import dotenv config
import "dotenv/config";
// import express
import express from "express";
// import cors
import cors from "cors";

// create express app
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use("/api", (req, res) => {
  res.send("Hello world");
});

// put server to listen
app.listen(PORT, () => console.log("Server running on port: " + PORT));
