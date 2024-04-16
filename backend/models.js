const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  movie_name: {
    type: String,
    required: true,
  },
  year:{
    type: Number,
    required: true,
  },
  description:{
    type: String,
    required:true
  },
  poster:{
    type: String,
    required: true,
  },
  trailer:{
    type: String,
    required: true,
  },
  genres:{
    type:Array,
    required:true
  }
});
