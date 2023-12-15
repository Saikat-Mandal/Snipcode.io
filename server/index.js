const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/user")
const questionRoutes = require("./routes/questions")
const answersRoutes = require("./routes/answers")
const app = express();

// middlewares 
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

// connect to mongoDb
mongoose
  .connect("mongodb://0.0.0.0:27017/labDb", {})
  .then(() => console.log("successfully connected to database"))
  .catch((err) => console.log(err));

// routes 
app.use("/auth" ,authRoutes)
app.use("/question" ,questionRoutes)
app.use("/answer" ,answersRoutes)


// app listen
app.listen(process.env.PORT, () =>
  console.log(`listening to port ${process.env.PORT}`)
);