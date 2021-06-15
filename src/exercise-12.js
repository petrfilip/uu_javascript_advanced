/**
 *
 *
 ■ Implement a class that contains methods for saving and loading a book.
 ■ API: async createbook (book), async getbook (code)
 ■ Each book contains at least the code, name, and author attributes
 ■ Books will be saved in json format
 ■ The books.json file
 ■ Working with json using API: JSON.parse(), JSON.stringify(obj)
 ■ Use asynchronous API fs.readFile and fs.writeFile
 ■ For ease of use, use the util.promisify library
 ■ Error handling - books.json does not exist, bad format.
 ■ book code must be unique - check when saving
 ■ If a book with an existing code is saved, an exception with the code
 attribute "DUPLICATE_CODE" is dropped.
 *
 *
 *
 */

const fs = require("fs")

const validateBook = book => {
  if (!(book && book.code && book.name && book.author)) {
    throw Error("This is not real book")
  }
};

const readFile = async (path) => {
  try {
    return await fs.promises.readFile(path);
  } catch (e) {
    console.log(`File ${path} does not exists`)
  }
}

const writeFile = async (path, data) => {
  try {
    return await fs.promises.writeFile(path, data);
  } catch (e) {
    console.log(`Something went wrong with file ${path}`)
  }
}

const booksStorage = 'books.json';
const loadAllBooks = async () => {
  try {
    const fileData = await readFile(booksStorage)
    const parsed = JSON.parse(fileData);
    console.log(`Loaded: ${parsed.length}`)
    return parsed;
  } catch (e) {
    console.error("Something went wrong")
    throw e
  }
}

class BookManager {

  async createBook(newBook) {

    validateBook(newBook)

    if (await this.getBook(newBook.code)) {
      throw Error("DUPLICATE_CODE")
    }

    const books = await loadAllBooks()
    books.push(newBook)

    const isWritten = await writeFile(booksStorage, JSON.stringify(books))
    return isWritten
  }

  async getBook(code) {
    const books = await loadAllBooks();
    const foundBook = await books.find(book => book.code === code)
    return foundBook
  }

}

module.exports = BookManager



