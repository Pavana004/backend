const mongoose = require("mongoose");


const movieschema = mongoose.Schema({
   
       title : {type:String,require:true},
       poster : {type:String,require:true},
       video : {type:String,require:true},
       genre: {type:String,require:true},


});

module.exports = mongoose.model("Movie",movieschema);