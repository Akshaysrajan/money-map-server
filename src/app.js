const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
// const {errorHandler, notFound } = require("./middleware/errorMiddleware");
const User = require("./model/User");
const { registerUser } = require("./controllers/users/usersCtrl");
const userRoute = require("./routes/users/usersRoute");
const { errorHandler, notFound } = require("./middlewares/errorMiddleware");

const app = express();

//env 
dotenv.config();

//db connect
dbConnect();

//middlewares
app.use(express.json());

//routes
app.use("/api/users", userRoute);


//error handler
app.use(notFound);
app.use(errorHandler);

 

//income 


//expenses




module.exports = app;

// name :me pass:3W9R6pMxatEi2fpx |mongodb
// mongodb+srv://me:<password>@money-map.ffadf0j.mongodb.net/

