const myPromise = new Promise(function(resolve, reject) {
  const success = true;

  if (success) {
    resolve("Data loaded!"); // fulfilled
  } else {
    reject("Something went wrong."); // rejected
  }
});

myPromise
  .then(function(result) {
    console.log(result); // "Data loaded!"
  })
  .catch(function(error) {
    console.log(error); // "Something went wrong."
  });