import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://mongodb-egresados:27017/test", {
    connectTimeoutMS: 30000, // Aumenta el tiempo de espera a 30 segundos
  })
  .then((db) => console.log("Base de datos conectada"))
  .catch((err) => console.log(err));