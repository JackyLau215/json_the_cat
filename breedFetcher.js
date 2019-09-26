const request = require('request');

// const args = process.argv.slice(2);
// const breed = args[0];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    
    if (error) {
      callback(error, null);
    } else {
      if (body === "[]") {
        //console.log("Breed Not Found");
        callback("Breed Not Found", null)
      } else if (body !== "[]") {
        const data = JSON.parse(body);
        //console.log(data[0]["description"]);
        callback(null, data[0]["description"].trim());
      }
    }
  });
};



module.exports = { fetchBreedDescription };