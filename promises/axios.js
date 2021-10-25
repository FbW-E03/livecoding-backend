const axios = require("axios");

// 1 promise

const result = axios.get("https://cat-fact.herokuapp.com/facts");

console.log(result);

result.then((response) => {
    console.log(response.data);
    console.log("the promise was resolved");
});

result.catch(() => {
    console.log("the promise failed");
});

console.log("When will I get my chance to show?");