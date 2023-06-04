import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost/test", {})
  .then((db) => console.log("Base de datos conectada"))
  .catch((err) => console.log(err));
