# api-tester
API testing with real-time reporting

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
const apiUrl = 'https://github.com/prasadjivane'; // Replace API endpoint
const apiTester = new ApiTester(apiUrl);

apiTester.testApi();
```