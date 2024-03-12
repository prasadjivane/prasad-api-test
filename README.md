# test-api
API testing with real-time reporting

## Installation

You can install API Tester using npm:

```bash
npm install test-api
```

## CLI Usage

```bash
npm test -- --url=https://github.com/prasadjivane  Replace API endpoint
```

## Usage

```bash
const ApiTester = require('test-api');

// Example usage
const apiUrl = 'https://github.com/prasadjivane'; // Replace API endpoint
const apiTester = new ApiTester(apiUrl);

apiTester.testApi();
```