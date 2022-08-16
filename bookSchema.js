const mongoose = require("mongoose");


const BooksSchema = mongoose.Schema({
   
       title : {type:String,require:true},
       poster : {type:String,require:true},
       pdf : {type:String,require:true},
       genre: {type:String,require:true},

});

module.exports = mongoose.model("books",BooksSchema);