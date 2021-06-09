
function printString(string) {
  console.log("STARTED: " + string);
  setTimeout(
    () => {
      console.log(string);
    },
    Math.floor(Math.random() * 100) + 1
  )
}

function printAll() {
  printString("A")
  printString("B")
  printString("C")
}

printAll();

