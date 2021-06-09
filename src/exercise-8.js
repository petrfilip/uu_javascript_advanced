/**
 * Rewrite the following code using Promise so that the values are
 listed in the correct order.
 */

function printString(string) {
  console.log("Started: " + string)
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      console.log(string)
      resolve()
    }, Math.floor(Math.random() * 100) + 1)
  })
}

function printAll() {
  printString("A")
    .then((r) => printString("B"))
    .then((r)=> printString("C"))


}

printAll()