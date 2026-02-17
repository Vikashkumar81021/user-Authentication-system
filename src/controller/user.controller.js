import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { User } from "../models/user.model.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log(req.body);

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing fileds are required" });
  }

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, " Email already exists");
  }

  const newUser = new User({ username, password, email });
  await newUser.save();

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
    user: { username, email, password },
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new ApiError(400, "Email and password are required");
  }

  const user = await User.findOne({ email });
  if (!user || !(await user.isPasswordCorrect(password))) {
    throw new ApiError(401, "Invalid credentials");
  }

  const accessToken = await user.generateAccessToken();

  res.cookie("access_token", accessToken, { httpOnly: true, secure: true });
  return res.json({ accessToken });
});

const logoutUser = asyncHandler(async (req, res) => {
  await User.findById(req.userId);

  res.clearCookie("access_token");
  return res.json({ message: "Logged out successfully" });
});

const fetchAllUsers = asyncHandler(async (req, res) => {
  const allUsers = await User.find();
  return res.json({ message: "Fetch All Users", allUsers });
});

export { registerUser, loginUser, logoutUser, fetchAllUsers };
