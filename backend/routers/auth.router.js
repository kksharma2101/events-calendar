import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { eventController } from "../controllers/event.controller.js";

const router = express.Router();

// register router
router.post("/register", register);

// login router
router.post("/login", login);

// event router
router.post("/event", eventController)

export default router;