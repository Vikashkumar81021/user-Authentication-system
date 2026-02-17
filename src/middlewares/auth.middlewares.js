import jwt from "jsonwebtoken";
import { ApiError } from "../utils/apiError.js";

const authMiddleware = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Please login first",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.userId = decoded._id;
    next();
  } catch (error) {
    return next(new ApiError(403, "Invalid or expired token"));
  }
};

export { authMiddleware };
