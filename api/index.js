const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

const PORT = process.env.PORT || 8080;

//database connection
async function connectToDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/newone");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

//create clients

app.post("/createClinent", async (req, res) => {
  const { name, email, lastName, mobNo } = req.body;

  try {
    const userDoc = await User.create({
      name,
      email,
      lastName,
      mobNo,
    });

    res.json(userDoc);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

//login client

app.post('/login', async (req, res) => {
  const { email, passwork } = req.body;

})


//Show Clients

app.get("/", async (req, res) => {
  res.json(await User.find({}));
});


connectToDatabase().then(() => {
  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});