function failingPromise() {
  return new Promise(function(resolve, reject) {
    reject("Something went wrong!");
  });
}

async function getData() {
  try {
    const result = await failingPromise();
    console.log(result);
  } catch(error) {
    console.log("Error caught:" + error); // runs when rejected
  }
}

getData();
// Output: Error caught: Something went wrong!