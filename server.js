import express from "express";
import "dotenv/config";
import session from "express-session";
import { errorHandling } from "./middlewares/Error.middleware.js";
import connectDB from "./config/mongodb.js";
import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.router.js";
import { sessionLogger } from "./middlewares/session.middleware.js";
const app = express();

app.use(express.json());

connectDB();

app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 },
  }),
);
app.use(sessionLogger);
// apis

app.use("/auth/users", authRouter);
app.use("/api", userRouter);
//error handling
app.use(errorHandling);

app.listen(3000, () => {
  console.log("server run in port 3000");
});
