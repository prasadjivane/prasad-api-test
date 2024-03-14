const axios = require('axios');
const yargs = require('yargs');

class ApiTester {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async testApi(method = 'GET', data = null) {
    const startTime = new Date().getTime(); // Start time 
    try {
      let response;
      switch (method.toUpperCase()) {
        case 'GET':
          response = await axios.get(this.apiUrl);
          break;
        case 'POST':
          response = await axios.post(this.apiUrl, data);
          break;
        case 'PUT':
          response = await axios.put(this.apiUrl, data);
          break;
        case 'DELETE':
          response = await axios.delete(this.apiUrl);
          break;
        default:
          throw new Error(`Invalid HTTP method: ${method}`);
      }

      const endTime = new Date().getTime(); // End time
      const elapsedTime = endTime - startTime; // Calculate elapsed time
      
      // To display response code and data in the console
      console.log('Response Code:', response.status);
      console.log('Response Data:', response.data);
      console.log('Time Taken:', elapsedTime, 'milliseconds');
    } catch (error) {
      // Handle errors
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error('Error Response Code:', error.response.status);
        console.error('Error Response Data:', error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
      }
    }
  }
}


// Parse cla only if not being run as npm test script
if (!module.parent) {
  const argv = yargs
    .options({
      'url': {
        describe: 'API URL to test',
        demandOption: true,
        type: 'string',
      },
      'method': {
        describe: 'HTTP method to use (GET, POST, PUT, DELETE)',
        demandOption: false,
        type: 'string',
        default: 'GET'
      },
      'data': {
        describe: 'Data to send with POST or PUT request',
        demandOption: false,
        type: 'string',
        default: null
      }
    })
    .help()
    .argv;

  const apiTester = new ApiTester(argv.url);
  apiTester.testApi(argv.method, argv.data);
}

module.exports = ApiTester; // Export ApiTester class for reuse
