/**
 *
 ■ Implement an API server to create and load a book
 ■ It will work with the storage of the previous task
 ■ GET getBook - returns the book by query parameter
 ■ POST createBook - Stores a book with parameters sent in request points
 ■ Error handling
 ■ getBook
 ■ Code attribute not assigned (400)
 ■ Book with the specified code does not exist (400)
 ■ createBook
 ■ No attribute code, name or author (400) specified
 ■ The book already exists in the database - duplicate code (400)
 ■ Unexpected database error (500)
 ■ implement caching for books. The cache can contain up to 10 records.
 ■ Take advantage of the lru-cache library (https://github.com/isaacs/node-lrucache)
 *
 *
 *
 * */

const express = require("express");
const Ajv = require('ajv');
const BookManager = require("./exercise-12");
const app = express();
const port = 5556;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const bookManager = new BookManager();
let ajv = new Ajv({ allErrors: true });

let createBookValidationSchema = {
  "type": "object",
  "properties": {
    "code": { "type": "string" },
    "name": { "type": "string" },
    "author": { "type": "string" }
  },
  "required": ["code", "name", "author"]
};

const LRU = require("lru-cache")
const cache = new LRU(10)

/**
 * get book by code
 */
app.get("/getBook/:code", async function(req, res) {

  const bookCode = req.params.code;
  // check input parameter
  if (!bookCode) {
    res.status(400)
    return res.send({ "error": `Missing params requested book code` })
  }

  // try to get book from cache
  if (cache.get(bookCode)) {
    console.log(`The book ${bookCode} is in cache`)
    return res.send(cache.get(bookCode))
  }

  // get book by code
  let book = null
  try {
    book = await bookManager.getBook(bookCode)
  } catch (e) {
    res.status(400)
    return res.send({ "error": `Book with code ${req.params.code} not found` })
  }
  // return book if exists or return error
  if (book !== undefined) {
    cache.set(bookCode, book)
    return res.send(book)
  } else {
    res.status(400)
    return res.send({ "error": `Book with code ${req.params.code} not found` })
  }
})

/**
 * create book
 */
app.post("/createBook", async function(req, res) {

  const isValid = ajv.validate(createBookValidationSchema, req.body);

  if (isValid) {
    try {
      await bookManager.createBook(req.body)
    } catch (e) {
      res.status(500)
      return res.send({ "error": "Error during book creation" })
    }
    return res.send({ "info": "Book created" })
  } else {
    const isRequired = ajv.errors.find(error => error.keyword === "required")
    if (isRequired) {
      return res.status(400).send({ "error": "No attribute code, name or author (400) specified" });
    } else {
      return res.status(500).send({ "error": "Database error" });
    }
  }
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
});