const age = 10;

const checkAge = new Promise((resolve, reject) => {
    if (age >= 18) {
        resolve("Access granted");
    } else {
        reject("Access denied");
    }
});

async function run() {
    try {
        const data = await checkAge;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

run();