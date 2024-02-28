import User from "../models/userModel.js";
import * as OTPAuth from "otpauth";
import QRCode from "qrcode";
import pkg from 'hi-base32';
import crypto from "crypto";

const { encode } = pkg;

const generateBase32Secret = () => {
  const buffer = crypto.randomBytes(15);
  const base32 = encode(buffer).replace(/=/g, "").substring(0, 24);
  return base32;
};


// Get all Users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a specific User by ID
export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a User by ID
export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a User by ID
export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Register a new user
export const registerUser = async (req, res) => {
  const user = new User(req.body);
  const savedUser = await user.save();

  const token = savedUser.generateAuthToken();
  res
    .header("x-auth-token", token)
    .json({ message: "User registered successfully", savedUser });
};

// Login a user
export const loginUser = async (req, res) => {
  // ... (login logic)

  const token = user.generateAuthToken();
  res.header("x-auth-token", token).json({ message: "Login successful", user });
};

// Update user password
export const updateUserPassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    // Assuming you have some form of authentication before reaching this point
    // Validate the old password
    const isValidPassword =
      (await User.verifyAuthToken(req.header("x-auth-token")).password) ===
      oldPassword;
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid old password" });
    }

    // Update the password
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { password: newPassword } },
      { new: true }
    );

    res.json({ message: "Password updated successfully", user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const enable2fa = async (req, res) => {
  const { username } = req.body;

  // Find the user by username (you should use a database here)
  const user = await User.findOne({ username: username });

  if (!user) {
    return res.status(404).send("User not found");
  }

  // Generate a secret key for the user
  const base32_secret = generateBase32Secret();
  user.secret = base32_secret;

  // Generate a QR code URL for the user to scan
  let totp = new OTPAuth.TOTP({
    issuer: "testNodeApp.com",
    label: "testNodeApp",
    algorithm: "SHA1",
    digits: 6,
    secret: base32_secret,
  });

  let otpauth_url = totp.toString();

  // Generate and send the QR code as a response
  QRCode.toDataURL(otpauth_url)
    .then((url) => {
      return res.json({
        status: "success",
        data: {
          qrCodeUrl: url,
          secret: base32_secret,
        },
      });
    })
    .catch((err) => {
      return res.status(500).json({
        status: "fail",
        message: "Error while generating QR Code",
      });
    });
};
