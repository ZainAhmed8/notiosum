const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', cors(), (req, res) => {

});

// Login Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const check = await collection.findOne({ email:email });
    if (check) {
      res.json("exist")
    }
    else {
      res.json("notexist")
    }
  } catch (error) {
    res.json("notexist")
  }
});

// Register Route
app.post('/api/register', async (req, res) => {
  const { fullname, email, password } = req.body;

  const data = {
    email:email,
    password:password,
    fullname:fullname
  }

  try {
    const check = await collection.findOne({ email:email });
    if (check) {
      res.json("exist")
    }
    else {
      res.json("notexist")
      await collection.insertMany([data])
    }
  } catch (error) {
    res.json("notexist")
  }
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
