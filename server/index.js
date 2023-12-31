const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.listen(8000, () => console.log("Backend Server Running on port 8000"));
