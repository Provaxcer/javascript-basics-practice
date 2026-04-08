const fetchData = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve("Here is your data!");
  }, 2000);
});

fetchData
  .then(function(data) {
    console.log(data); // prints after 2 seconds: "Here is your data!"
  })
  .catch(function(error) {
    console.log(error);
  });