const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
var path = require("path");
const blogRouter = require("./routers/blogRouter");
// const cookieparser = require("cookie-parser");

app.use(
  cors({
    origin: "https://blog-page-five-beta.vercel.app",
    credentials: true,
  })
);

app.use(bodyParser.json());
// app.use(cookieparser());

const db_link =
  "mongodb+srv://admin:gUWgy3buWdJgOAdx@cluster0.aaigrir.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(db_link, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database Connected");
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });

  var htmlpath = path.join(__dirname, "public");
  app.use(express.static(htmlpath));

  app.use("/blog", blogRouter);

// const userRouter = require("./routers/userRouter");
// const todoRouter = require("./routers/todoRouter");
// const { protectRoute } = require("./controller/userController");
//   const todoRouter = require("")


// app.use("/user", userRouter);
// app.use(protectRoute);
// app.use("/todo", todoRouter);
