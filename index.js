const ApiTester = require('./apiTester');

// Example usage to test api from cli
const apiUrl = 'https://github.com/prasadjivane'; // Replace with your API endpoint
const apiTester = new ApiTester(apiUrl);

apiTester.testApi();
