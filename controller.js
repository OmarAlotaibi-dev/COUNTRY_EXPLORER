// this for handling the HTTP requsests, processing data, and generating appropriate responses
// IMPORTING COUNtries-services module to fetch countries data
// define function to handle the http  get request. 
// call the fetchCountries function from the countries-services module to get the list of countries
// generate response with data returned with the API 
// export the function created in the controler.js  modules so it can be accessed by other modules, such as server.js


// requered moudles 
const path = require("path");// importing the path module to work with file and directory paths
const services = require("./countries-services"); // importing the countries-services module to fetch countries data
const { write } = require("fs");

/* function to handle the http request from the server */
function handleGetCountries(req,res){
  let filepath = "." + req.url; // construct the file path based on the request URL
  // route for rest countries API data
  if (filepath == "./countries"&& req.method === "GET"){  
    services.fetchCountries() // call the fetchCountries function from the countries-services module to get the list of countries 
    .then(function (data){
        if (data){
            res.writeHead(200,{"Content-Type":"application/json"}); // set the response header to indicate that the content type is JSON
            res.end(JSON.stringify(data));// serve fetched data as JSON
        }else {
            //if data is nnull return 500 with error massage 
            res.statusCode = 500;
            res.end(JSON.stringify({error:"internal server error: response data is null"}));
        }
    })
    .catch(function (error){
        console.error(" Error fetching countries data:", error); // log the error for debugging purposes
        res.statusCode = 500; // set the response status code to 500 (Internal Server Error)
        res.end(JSON.stringify({error:"internal server error: "})); // send an error response with the error message
    });
    
}else if (filepath == "./countries" && req.method !== "GET"){
        // if the request method is not GET return 405 with error message
   res.writeHead(405,{"Content-Type":"text/plain"}); // set the response header to indicate that the content type is plain text
    res.end("Method Not Allowed"); // send a response with the error message "Method Not Allowed"
     }else{
        res.writeHead(404,{"Content-Type":"text/plain"}); // set the response header to indicate that the content type is plain text
        res.end("Not Found"); // send a response with the error message "Not Found"

     }
    }
    //eport the handlerequst function for use in other modules
module.exports = {
    handleGetCountries
};
   

