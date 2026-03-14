import express from "express";
import { protect } from "../middlewares/auth.middleware.js";
import { getUsers } from "../controllers/user.Contrillers.js";

const userRouter = express.Router();

userRouter.get("/users", protect, getUsers);

export default userRouter;
