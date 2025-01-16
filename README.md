# Missing Data Validation in Express.js POST Request

This repository demonstrates a common vulnerability in Express.js applications: missing data validation in POST requests.  The vulnerable code lacks checks for required fields in the request body, which can lead to errors, unexpected behavior, or even security vulnerabilities.

## Vulnerable Code

The `bug.js` file contains the vulnerable code.  It demonstrates a simple POST endpoint that adds new users to an in-memory array.  However, it does not validate the request body to ensure that it contains the necessary fields.  This can lead to errors if the client sends a request without the expected data.

## Solution

The `bugSolution.js` file demonstrates a corrected version of the code. It includes validation to ensure the request body contains the required fields (`name` and `email`) before adding the user to the array.  It handles missing data gracefully by returning appropriate error responses.

## How to Reproduce

1.  Clone this repository.
2.  Navigate to the repository directory in your terminal.
3.  Run `npm install express` to install the required dependencies.
4.  Run `node bug.js` to start the vulnerable server.
5.  Send a POST request to `/users` with a missing `name` or `email` field using a tool like Postman or curl.  Observe the error.
6.  Run `node bugSolution.js` to start the corrected server.
7.  Repeat step 5 to see how the corrected server handles missing data.