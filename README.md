# api-tester
API testing with real-time reporting
# API Tester

API Tester is a Node.js module for testing APIs in real-time.

## Installation

You can install API Tester using npm:

```bash
npm install api-tester
```

## CLI Usage

```bash
npm test -- --url=https://github.com/prasadjivane  Replace API endpoint
```

## Usage

```bash
const ApiTester = require('api-tester');

// Example usage
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1'; // Replace API endpoint
const apiTester = new ApiTester(apiUrl);

apiTester.testApi();
```