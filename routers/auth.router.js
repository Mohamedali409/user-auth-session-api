import express from "express";
import {
  getCurrentUser,
  login,
  logout,
  register,
} from "../controllers/auth.controller.js";
import { protect } from "../middlewares/auth.middleware.js";
import { registerValidator } from "../validations/user.validation.js";

const authRouter = express.Router();

authRouter.post("/register", registerValidator, register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/me", protect, getCurrentUser);

export default authRouter;
