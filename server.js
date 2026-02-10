// this call controller functions to handel the HTTP requests 
/* write the code  in the server.js file to inport the controller module from the controller.js file and use it to handle incoming HTTP requests.
handlerequest() function. run the server.js to start the server 
view the data return bt the API in the brawser*/

let http = require("http"); // importing the http module to create an HTTP server
let routes = require("./controller"); // importing the controller module to handle HTTP requests

// create an http server using createServer method and pass the handleGetCountries function from the controller module as the request handler
// the handlerequest function is passed as a callback function to handle incoming HTTP requests and generate appropriate responses
// this function will be called every time the server receives an HTTP request
// the server will be listening on port 3000 for incoming requests
http.createServer(routes.handleGetCountries).listen(3000, function() {
    console.log("Server is running on port 3000"); // log a message to the console indicating that the server is running
});

