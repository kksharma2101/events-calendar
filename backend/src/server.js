import "dotenv/config";
import {connection, sequelize} from "../config/postgresDb.js";
import app from "./app.js";

const PORT = process.env.PORT || 2020;

sequelize.sync({ alter: true })
  .then(() => console.log("All models were synchronized successfully."))
  .catch(err => console.error("Sync error:", err));


app.listen(PORT, () => {
  console.log(`server is runing on ${PORT}`)
  connection()
});
