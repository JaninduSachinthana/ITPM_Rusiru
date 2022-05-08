const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

Port = process.env.PORT;

mongoose.connect(process.env.Url, () => {
    useNewUrlParser = true,
    useUnifiedTopology = true
});

const connected = mongoose.connection;
connected.once("open", () => {
    console.log("Mongo DB Connected..");
});

app.listen(Port, () => {
    console.log("Port No : " + Port);
});

const Inquiry = require("./routes/Inquiry");
app.use('/inquiry', Inquiry);

const User = require("./routes/User");
app.use("/user", User);