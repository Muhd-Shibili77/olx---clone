const mongoose = require('mongoose');


const connectDB = async () => { 
  try {
    console.log(); 
     await mongoose.connect('mongodb://localhost:27017/Olx');
    console.log("connected to mongodb");
  } catch (error) {
    console.error('mongodb connection error:',error);
   
  }
};

module.exports = connectDB;