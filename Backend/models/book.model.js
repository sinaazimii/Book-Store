const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id : { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  pages: { type: Number, required: true },
  date: { type: Date, required: false },
  rate : {type: Number , required:true} , 
  language : { type:String , required : true} , 
  price :{ type:Number , required : true}  ,
  category:{type:Array , required: true} ,
  description: { type:String , required : true} , 
}, {
  timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;