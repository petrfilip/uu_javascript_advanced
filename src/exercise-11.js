/**
 * Replace the following code using async/await so that addString
 returns the result and was called in the correct order.
 */

async function addString(previous, current) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(previous + " " + current);
    }, Math.floor(Math.random() * 100) + 1);
  });
}

async function addAll() {
  let result = "";
  result = await addString(result, "A");
  result = await addString(result, "B");
  result = await addString(result, "C");
  console.log(result);
}

addAll();