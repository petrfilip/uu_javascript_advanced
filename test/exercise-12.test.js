const BookManager = require("../src/exercise-12");

const fs = require("fs")

test("test12", () => {

  async function runTest() {

    await fs.promises.writeFile("./books.json", JSON.stringify([]))

    let bookManager = new BookManager();

    const randomBook = {
      code: "1",
      name: "A",
      author: "B"
    }

    expect(await bookManager.getBook("1")).toEqual(undefined); //not found
    await bookManager.createBook(randomBook) // create new book
    expect(await bookManager.getBook("1")).toEqual(randomBook); // the new book has been found by code
    expect(await bookManager.createBook(randomBook)).toThrow("DUPLICATE_CODE") // error when create book with same code
    expect(await bookManager.getBook("0")).toEqual(undefined); // the book not found by code

    await fs.promises.writeFile("./books.json", JSON.stringify([]))

  }

  runTest()
});