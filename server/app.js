require("dotenv").config({path: "./config/config.env"})

const express = require('express')
const mongoose = require('mongoose');
const morgan = require('morgan');
const connectDB = require('./config/db');

const auth = require("./middlewares/auth")

const app = express();

//middlewares
app.use(express.json());
app.use(morgan("tiny"));
app.use(require("cors")())

//routes
app.use("/protected", auth, (req, res) => {
    return res.status(200).json({user: req.user})
})

app.use("/api/", require("./routes/auth"))

//server configurations
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    try
    {
        await connectDB();
        console.log(`Server listening on port : ${PORT}`)
    }catch(err){
        console.log(err);
    }
});