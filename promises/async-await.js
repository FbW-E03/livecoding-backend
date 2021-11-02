const axios = require("axios");

// 2 promises

async function getCatData() {
    const result = await axios.get("https://cat-fact.herokuapp.com/facts");

    //console.log(result.data);
    return result.data;
}

const data = getCatData();

console.log(data);