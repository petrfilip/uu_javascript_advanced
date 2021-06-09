/**
 * Replace the following code with callbacks so that the values are listed in the correct order
 */

function printString(string) {
  console.log("Started: " + string)

  setTimeout(() => {
    console.log(string)
  }, Math.floor(Math.random() * 100) +1)
}

function printAll() {
  printString("A")
  printString("B")
  printString("C")
}

printAll()

