/**
 * Replace the following code with callbacks so that addString returns
 the result and was called in the correct order.
 */

function addString(previous, current, callback) {
  setTimeout(
    () => {
      callback((previous + ' ' + current))
    },
    Math.floor(Math.random() * 100) + 1
  )
}

function addAll() {
  addA('');
}

function addA(value) {
  addString(value, 'A', addB);
}

function addB(value) {
  addString(value, 'B', addC);
}

function addC(value) {
  addString(value, 'C', print);
}

function print(value) {
  console.log(value);
}

addAll();