const promise = new Promise((resolve, reject) => {
    if (true) {
        resolve("Promise resolved successfully!");
    } else {
        reject("Promise rejected!");
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });