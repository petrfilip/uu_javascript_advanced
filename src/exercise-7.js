/**
 * Replace the following code with callbacks so that addString returns
 the result and was called in the correct order.
 */

function addString(previous, current) {
  setTimeout(() => {
    console.log(previous + " " + current)
  }, Math.floor(Math.random() * 100) + 1)
}

function addAll() {
  let result = addString("", "A")
  result = addString(result, "B")
  result = addString(result, "C")
  console.log(result)
}

addAll()