const mongoose = require("mongoose");

// const URI='mongodb+srv://hamza131:hamza12345@hamza.o1qkf.mongodb.net/hamza?retryWrites=true&w=majority';
const URI =
  "mongodb://usman:usman@cluster0-shard-00-00.ctgzm.mongodb.net:27017,cluster0-shard-00-01.ctgzm.mongodb.net:27017,cluster0-shard-00-02.ctgzm.mongodb.net:27017/alphastore?ssl=true&replicaSet=atlas-6nykfb-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log("Connection Established");
};

module.exports = connectDB;
