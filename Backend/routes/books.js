const router = require('express').Router();
let Book = require('../models/book.model');

router.route('/').get((req, res) => {
  Book.find()
    .then(books => res.json(books))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const author = req.body.author;
  const pages = Number(req.body.pages);
  const date = Date.parse(req.body.date);
  const rate = Number(req.body.rate);
  const price = Number(req.body.price);
  const language = req.body.language;
  const description = req.body.description;
  const category = Array(req.body.category);
  
  const newBook = new Book({
    id , 
    title,
    author , 
    pages, 
    rate , 
    price, 
    language , 
    category ,
    description,
    date,
  });

  newBook.save()
  .then(() => res.json('Book added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Book.findById(req.params.id)
    .then(book => res.json(book))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Book.findById(req.params.id)
    .then(book => {
      book.id = req.body.id;
      book.title = req.body.title;
      book.author = req.body.author;
      book.pages = Number(req.body.pages);
      book.date = Date.parse(req.body.date);
      book.rate = Number(req.body.rate);
      book.price = Number(req.body.price);
      book.language = req.body.language;
      book.description = req.body.description;
      book.category = Array(req.body.category);

      book.save()
        .then(() => res.json('Book updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;