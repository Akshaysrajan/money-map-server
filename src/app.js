const express = require("express");
const dotenv = require("dotenv");
const dbConnect = require("./config/dbConnect");
// const {errorHandler, notFound } = require("./middleware/errorMiddleware");
const User = require("./model/User");
const { registerUser } = require("./controllers/users/usersCtrl");

const { errorHandler, notFound } = require("./middlewares/errorMiddleware");
const userRoute = require("./routes/users/usersRoute");
const incomeRoute = require("./routes/income/incomeRoutes");
const expenseRoute = require("./routes/expenses/expenseRoutes");

const app = express();

//env 
dotenv.config();

//db connect
dbConnect();

//middlewares
app.use(express.json());

//Users routes
app.use("/api/users", userRoute);


//income routes
app.use("/api/income", incomeRoute);

//expense routes
app.use("/api/expenses", expenseRoute);

//error handler
app.use(notFound);
app.use(errorHandler);

 

//income 


//expenses




module.exports = app;

// name :me pass:3W9R6pMxatEi2fpx |mongodb
// mongodb+srv://me:<password>@money-map.ffadf0j.mongodb.net/

