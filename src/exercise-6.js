/**
 * Replace the following code with callbacks so that the values are listed in the correct order
 *
 * todo - what is correct order?
 */

function printString(string, callback) {
  setTimeout(() => {
    console.log(string)
    callback && callback()
  }, Math.floor(Math.random() * 100) + 1)
}

function printAll() {
  printString("A",
    () => printString("B",
      () => printString("C")))

}

printAll()

