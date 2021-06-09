/**
 * Replace the following code using promises so that addString
 returns the result and was called in the correct order.
 */

function addString(previous, current) {
  setTimeout(() => {
    return (previous + " " + current)
  }, Math.floor(Math.random() * 100) + 1)
}


function addAll() {
  let result = addString("", "A")
  result = addString(result, "B")
  result = addString(result, "C")
  console.log(result)
}

addAll()