import "dotenv/config";
import {connection, sequelize} from "../config/postgresDb.js";
import app from "./app.js";

const PORT = process.env.PORT || 2020;

// Sync database
// const connection = () =>  sequelize.sync().then(() => {
//   console.log('PostgreSQL connected and synced with Sequelize');
// }).catch((err) => console.error('Error syncing with PostgreSQL:', err));


app.listen(PORT, () => {
  console.log(`server is runing on ${PORT}`)
  connection()
});
