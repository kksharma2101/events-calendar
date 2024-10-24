import express from "express";
import { login, register } from "../controllers/auth.controller.js";
import { createEvents, deleteEvent, getAllEvents, updateEvent } from "../controllers/event.controller.js";
import { userVerify } from "../middleware/auth.middleware.js";

const router = express.Router();

// Register router
router.post("/register", register);

// Login router
router.post("/login", login);

// Create event router
router.post("/event" , createEvents)

// Get all event router
router.get("/get-events" , getAllEvents)

// Update event router
router.put("/update-event/:id", userVerify , updateEvent)

// Delete event router
router.delete("/delete-event/:id", userVerify , deleteEvent)

export default router;