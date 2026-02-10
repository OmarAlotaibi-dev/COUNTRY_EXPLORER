// this file contain the logic responsible for communication with the external API
// importing https module to make HTTP requests

const https = require('https');

// define the URL of the rest countries API 
const API_URL = 'https://restcountries.com/v3.1/all?fields=name,capital,region,population,flags';

// declare a variable to cache the fetched countries data
let countriesData = null; // this stores countries data after fetching it
// function to  fetch countries data from the API
// returns a promise that resolves to the list of countries
function fetchCountries() {
    return new Promise (function(resolve, reject) {
        //make an HTTPS GET request to the API URL
        let req = https.get (API_URL, function(res){
            let data = ""; // variable to accumulate the data chunks
            //listeing for data event to receive chunks of data
            res.on ("data", function(chunk){
                data += chunk;
        });
        //listing for end event 
        res.on ("end", function(){
            // parse the accumulated data as JSON
            countriesData = JSON.parse(data);
            resolve(countriesData);
    });
});
//listing for error event to handle any errors during the request
req.on ("error", function (error){
    reject(error);
});
// end the request
req.end();
    });
}
// eporting the fetchCountries function for use in other modules
module.exports = {
    fetchCountries
};