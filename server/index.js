const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require("./models/users");
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const username = encodeURIComponent("ritikdata18");
const password = encodeURIComponent("Computer@123qag27924");

console.log(username);
console.log(password);

mongoose.connect(
    `mongodb+srv://${username}:${password}@database.0u3utla.mongodb.net/mern?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
    console.log("Connected to MongoDB");
});

// this is the get method to call api from mongo db
app.get("/getUsers", (req, res) => {
    UserModel.find({})
        .then(function(users) {
            res.json(users);
        })
        .catch(function(err) {
            res.json(err);
        });
});

app.post("/createUser",async(req,res)=>{
    const user = req.body;
    const newuser = new UserModel(user);
    await newuser.save()
    res.json(user);
    console.log(user);
})

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
