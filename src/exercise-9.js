/**
 * Replace the following code using promises so that addString
 returns the result and was called in the correct order.
 */

function addString(previous, current) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(previous + " " + current);
    }, Math.floor(Math.random() * 100) + 1);
  });
}

function addAll() {
  addString("", "A")
    .then(result => addString(result, "B"))
    .then(result => addString(result, "C"))
    .then(result => console.log(result));
}

addAll();