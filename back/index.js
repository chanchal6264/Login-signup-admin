const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(bodyparser.json());
// app.use(express.json());

const userRouter = require("./routers/user");

mongoose
  .connect(
    "mongodb+srv://sparksvasim:lh4Vo5FbA3CJ3e1m@social-influencer.sfbg9xi.mongodb.net/sparks"
  )
  .then(() => console.log("database connected successfully"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send(`Hello World on ${port}`));

app.use("/user", userRouter.router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
