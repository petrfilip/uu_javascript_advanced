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
