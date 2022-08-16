const mongoose = require("mongoose");


const AlbumSchema = mongoose.Schema({
   
       title : {type:String,require:true},
       poster : {type:String,require:true},
       album : {type:String,require:true},
       genre: {type:String,require:true},

});

module.exports = mongoose.model("Album",AlbumSchema );