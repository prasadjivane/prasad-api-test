# prasad-api-tester

API testing with real-time reporting using prasad-api-tester

## Installation

You can install API Tester using npm:

```bash
npm install prasad-api-tester
```

## CLI Usage Example

```bash
npm test -- --url=hhttps://example.com/api

npm test -- --url="hhttps://example.com/api" --method="POST" --data='{"title":"name","body":"new","userId":1}'

npm test -- --url="hhttps://example.com/api" --method="PUT" --data='{"id":1,"title":"updated name","body":"updated body","userId":1}'

npm test -- --url="hhttps://example.com/api" --method="DELETE"

```

## Usage

```bash
const ApiTester = require('prasad-api-tester');

// Example usage
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
```
