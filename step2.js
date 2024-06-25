const fs = require("fs");
const process = require("process");
const axios = require("axios");

function cat(path) {
  fs.readFile(path, "utf8", function (err, data) {
    if (err) {
      console.log("Error: ", err);
      process.exit(1);
    }
    console.log(data);
  });
}

async function webCat(url) {
  try {
    let response = await axios.get(url);
    console.log(response.data);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

let destination = process.argv[2];

if (destination.slice(0, 4) === "http") {
  webCat(destination);
} else {
  cat(destination);
}
