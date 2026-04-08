myPromise
  .then(function(result) {
    console.log(result); // "Data loaded!"
  })
  .catch(function(error) {
    console.log(error); // "Something went wrong."
  });