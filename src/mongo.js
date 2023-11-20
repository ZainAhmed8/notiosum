const mongoose=require("mongoose")
// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log("mongodb connected");
})
.catch(() => {
    console.log("failed");
})

// User Schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  }
});

const collection = mongoose.model("collection", UserSchema)

module.exports=collection