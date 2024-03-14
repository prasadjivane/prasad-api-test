<img width="697" alt="npm-api-tester" src="https://github.com/prasadjivane/test-now/assets/26869583/4fa5cd75-1715-4619-802b-0df3382ec902">


# prasad-api-test

API testing with real-time reporting using prasad-api-test. CLI tool for testing API in real-time.

## Installation

You can install API Tester using npm:

```bash
npm install prasad-api-test
```

## CLI Usage Example

```bash
npm test -- --url=hhttps://example.com/api

npm test -- --url="hhttps://example.com/api" --method="POST" --data='{"title": "name", "body": "new", "userId":1}'

npm test -- --url="hhttps://example.com/api" --method="PUT" --data='{"id":1, "title": "updated name", "body": "updated body", "userId":1}'

npm test -- --url="hhttps://example.com/api" --method="DELETE"

```

## Usage

```bash
const ApiTester = require('prasad-api-test');

// 
const apiUrl = 'https://example.com/api'; // Replace with your API endpoint
const apiTester = new ApiTester(apiUrl);

// GET request
apiTester.testApi('GET');

// POST request
const postData = { key: 'value' }; // Replace with your POST data
apiTester.testApi('POST', postData);

// PUT request
const putData = { key: 'updated value' }; // Replace with your PUT data
apiTester.testApi('PUT', putData);

// DELETE request
apiTester.testApi('DELETE');
```

## Contributing

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the ISC License.
