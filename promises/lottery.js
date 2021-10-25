function didYouWin() {
    const promise = new Promise((resolve, reject) => {
        const random = Math.random();
        if(random >= 0.5) {
            resolve(random);
        } else {
            reject("error");
        }
    });

    return promise;
}

const result = didYouWin();

console.log(result);

result.then((number) => {
    console.log("the promise resolved");
    console.log(number);
}).catch((error) => {
    console.log(error);
    console.log("the promise was rejected");
});
