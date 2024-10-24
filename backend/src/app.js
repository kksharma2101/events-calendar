import express from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors";
import authRouter from "../routers/auth.router.js";

const app = express();
app.use(express.json());

// middleware call
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors());

// router call
app.use("/api", authRouter);

app.use("/test", function (req, res) {
  res.send("server is live");
});

export default app;