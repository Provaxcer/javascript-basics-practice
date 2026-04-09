const age = 10;

const checkAge = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("Access granted")
    }
    else {
        reject("Access denied")
    }
})

checkAge
    .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    console.log(error);
  });