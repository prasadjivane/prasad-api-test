const ApiTester = require('./apiTester');

// Example usage to test API from CLI
const apiUrl = 'https://example.com/api'; // Replace with your API endpoint
const apiTester = new ApiTester(apiUrl);

// Example usage for GET request
apiTester.testApi('GET');

// Example usage for POST request
const postData = { key: 'value' }; // Replace with your POST data
apiTester.testApi('POST', postData);

// Example usage for PUT request
const putData = { key: 'updated value' }; // Replace with your PUT data
apiTester.testApi('PUT', putData);

// Example usage for DELETE request
apiTester.testApi('DELETE');
