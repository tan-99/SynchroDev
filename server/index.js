const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");
const cors = require("cors");

app.use(cors());

const uri =
  'mongodb://siddanthmanoj:siddanthmanoj@ac-woab2wp-shard-00-00.yurdnnj.mongodb.net:27017,ac-woab2wp-shard-00-01.yurdnnj.mongodb.net:27017,ac-woab2wp-shard-00-02.yurdnnj.mongodb.net:27017/?ssl=true&replicaSet=atlas-xgckfc-shard-0&authSource=admin&retryWrites=true&w=majority'

app.use(express.json());

app.get('/userForm', async (req, res) => {
    res.json({
        "message": "hi"
    })
})

app.put('/userForm', async (req, res) => {

    const client = new MongoClient(uri)

    const formData = req.body.formData

    try {

        await client.connect()

        const database = client.db('SynchroDev')
        const users = database.collection('users')

        const query = { user_id: formData.user_id }

        const updateForm = {
            $set: {
                user_id: formData.user_id,
                first_name: formData.first_name,
                dob_day: formData.dob_day,
                dob_month: formData.dob_month,
                dob_year: formData.dob_year,
                skills_in_domain: formData.skills_in_domain,
                url: formData.url,
                about: formData.about,
                matches: formData.matches,
            },
        }

        const insertedUser = await users.updateOne(query, updateForm)
        res.json(insertedUser)
        
    }catch(err) {
        console.log(err)
    }
})

app.listen(8000, () => console.log("Backend Server Running on port 8000"));

const uri =
  "mongodb://siddanthmanoj:siddanthmanoj@ac-woab2wp-shard-00-00.yurdnnj.mongodb.net:27017,ac-woab2wp-shard-00-01.yurdnnj.mongodb.net:27017,ac-woab2wp-shard-00-02.yurdnnj.mongodb.net:27017/?ssl=true&replicaSet=atlas-xgckfc-shard-0&authSource=admin&retryWrites=true&w=majority";

app.post("/signup", async (req, res) => {
  const client = new MongoClient(uri);

  const { email, password } = req.body;
  const generatedUserId = uuidv4();
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await client.connect();
    const database = client.db("SynchroDev");
    const users = database.collection("users");

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(409).send("User account already exists. Log in");
    }
    const sanitizedEmail = email.toLowerCase();

    const data = {
      user_id: generatedUserId,
      email: sanitizedEmail,
      hashed_password: hashedPassword,
    };
    const insertedUser = await users.insertOne(data);
    const token = jwt.sign(insertedUser, sanitizedEmail, {
      expiresIn: 60 * 24,
    });
    res.status(201).json({ token, userId: generatedUserId });
  } catch (err) {
    console.log(err);
  }
});
