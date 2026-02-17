import { Router } from "express";

import {
  fetchAllUsers,
  loginUser,
  logoutUser,
  registerUser,
} from "../controller/user.controller.js";
import { authMiddleware } from "../middlewares/auth.middlewares.js";
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

//private route
router.route("/logout").post(authMiddleware, logoutUser);
router.route("/").get(authMiddleware, fetchAllUsers);

export default router;
