const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const User = require("./models/User");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173", // Update with your frontend URL
  })
);

const PORT = process.env.PORT || 8080;

// Database connection
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/newone");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}


const validateFormData = [
  body("name").notEmpty().withMessage("Name is required"),
  body("lastName").notEmpty().withMessage("Last name is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("mobNo").isMobilePhone().withMessage("Invalid mobile number"),
  body("msg")
    .optional()
    .isLength({ max: 200 })
    .withMessage("Message must be less than 200 characters"),
];

app.post("/createClient", validateFormData, async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { name, email, lastName, mobNo, msg } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      lastName,
      mobNo,
      msg,
    });

    res.status(201).json(userDoc); 
  } catch (e) {
    console.error("Error creating user:", e);
    res.status(500).json({ error: "Internal server error" });
  }
});

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
