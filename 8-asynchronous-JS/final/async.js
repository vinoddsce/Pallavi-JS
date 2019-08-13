// function f1(f2) {
//     f2(100);
// }
// f1(value => console.log(value));

// var isSuccess = false;
// const numberPromise = new Promise((resolve, reject) => {
//     if (isSuccess) {
//         resolve("Success");
//     } else {
//         reject("Error");
//     }
// });

// numberPromise
//     .then(value => console.log(value))
//     .catch(err => console.log(err));


// var isCorrect = false;

// const numberPromise = new Promise((resolve, reject) => {
//     if (isCorrect) {
//         resolve("It's Correct");
//     } else {
//         reject("It's Not Correct");
//     }
// });
// numberPromise
//     .then(value => console.log(value))
//     .catch(error => console.log(error));






const loadImage = new Promise(function (resolve, reject) {
    url = `https://api.randomuser.me/?nat=us,gb&results=1`;
    var request = new XMLHttpRequest();
    request.open('GET', url);

    // When the request loads, check whether it was successful
    request.onload = function () {
        if (request.status === 200) {
            // If successful, resolve the promise
            console.log("Sucess");
            resolve(request.response);
        } else {
            // Otherwise, reject the promise
            console.log("Error");
            reject(Error('An error occurred while loading image. error code:' + request.statusText));
        }
    };

    request.send();
});

loadImage.then(res => {
    document.getElementById("documentHolder").innerHTML = res;
    console.log(res);
}).catch(err => {
    console.log(err);
});


