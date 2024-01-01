const express = require("express");
const app = express();

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
