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