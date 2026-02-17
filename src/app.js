import express from "express";
import cookieParser from "cookie-parser";
const app = express();
app.use(express.json());
app.use(cookieParser());

import userRoute from "./routes/user.route.js";

app.use("/api/v1/users", userRoute);
export { app };
