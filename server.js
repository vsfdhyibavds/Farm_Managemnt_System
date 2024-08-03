const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs'); // For hashing passwords
const jwt = require('jsonwebtoken'); // For generating JWT tokens
const dotenv = require('dotenv'); // For environment variables

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/farm-management-system', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define the schema for the farm collection
const farmSchema = new mongoose.Schema({
  farmId: { type: String, required: true, unique: true },
  farmName: { type: String, required: true },
  farmEmail: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create a model for the farm collection
const Farm = mongoose.model('Farm', farmSchema);

// Use body-parser to parse JSON requests
app.use(bodyParser.json());

// Register a new farm
app.post('/register', async (req, res) => {
  const { farmId, farmName, farmEmail, password } = req.body;
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const farm = new Farm({ farmId, farmName, farmEmail, password: hashedPassword });
    await farm.save();
    res.send({ message: 'Farm registered successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error registering farm' });
  }
});

// Login a farm
app.post('/login', async (req, res) => {
  const { farmId, password } = req.body;
  try {
    const farm = await Farm.findOne({ farmId });
    if (!farm || !(await bcrypt.compare(password, farm.password))) {
      res.status(401).send({ message: 'Invalid farm ID or password' });
    } else {
      // Generate a JWT token
      const token = jwt.sign({ farmId: farm.farmId }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.send({ message: 'Farm logged in successfully', token });
    }
  } catch (err) {
    res.status(500).send({ message: 'Error logging in farm' });
  }
});

// Middleware to authenticate JWT
const auth = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ message: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.farm = decoded;
    next();
  } catch (err) {
    res.status(401).send({ message: 'Invalid token' });
  }
};

// Protected route example
app.get('/protected', auth, (req, res) => {
  res.send({ message: 'This is a protected route', farmId: req.farm.farmId });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
