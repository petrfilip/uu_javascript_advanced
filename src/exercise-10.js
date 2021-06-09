/**
 * Rewrite the following code using async/await so that the
 values are listed in the correct order.
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

async function printAll() {
  await printString("A")
  await printString("B")
  await printString("C")
}

printAll()