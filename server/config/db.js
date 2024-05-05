const mongoose = require("mongoose")

const connectDB = async () => {
    return mongoose
    .connect("mongodb+srv://wasana:wasana@cluster0.v7n0qyk.mongodb.net/ContactManagement")
    .then(() => console.log(`Connection to database established`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;