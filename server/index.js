const express = require("express");
const app = express();

const { MongoClient } = require("mongodb");
const cors = require("cors");

app.use(cors());

app.use(express.json());

app.listen(8000, () => console.log("Backend Server Running on port 8000"));

const uri =
  "mongodb://siddanthmanoj:siddanthmanoj@ac-woab2wp-shard-00-00.yurdnnj.mongodb.net:27017,ac-woab2wp-shard-00-01.yurdnnj.mongodb.net:27017,ac-woab2wp-shard-00-02.yurdnnj.mongodb.net:27017/?ssl=true&replicaSet=atlas-xgckfc-shard-0&authSource=admin&retryWrites=true&w=majority";
