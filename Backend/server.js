const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://sina:test123@cluster0.pcbkk.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true  }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const bookRouter = require('./routes/books');
const usersRouter = require('./routes/users');

app.use('/book', bookRouter);
app.use('/user', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
