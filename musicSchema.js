const mongoose = require("mongoose");


const MusicSchema = mongoose.Schema({
   
       title : {type:String,require:true},
       poster : {type:String,require:true},
       songs : {type:String,require:true},
       artist: {type:String,require:true},

});

module.exports = mongoose.model("Music",MusicSchema  );