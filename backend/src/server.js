import "dotenv/config";
import {connection} from "../config/postgresDb.js";
import app from "./app.js";

const PORT = process.env.PORT || 2020;


app.listen(PORT, () => {
  console.log(`server is runing on ${PORT}`)
  connection()
});
