const mongoose = require("mongoose");

module.exports = function() {
    mongoose
        .connect(process.env.DEV_MONGODB, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        .then(() => console.log("Connected to MongoDB..."));
};