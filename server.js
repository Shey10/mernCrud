const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Import routes
const postRoutes = require("./routes/posts");

// App middleware
app.use(bodyParser.json());
app.use(postRoutes);
app.use(cors());

const PORT = 8000;
const DB_URL = 'mongodb+srv://janithisanga13:Shey2002@mernapp.mxscid7.mongodb.net/mernCrud?retryWrites=true&w=majority';

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('DB Connected');
    })
    .catch((err) => console.log('DB Connection error', err));

app.listen(PORT, () => {
    console.log(`App is Running on ${PORT}`);
});

