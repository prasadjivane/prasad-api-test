const axios = require('axios');
const yargs = require('yargs');


class ApiTester {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  async testApi() {
    const startTime = new Date().getTime(); // Start time of the API call
    try {
      const response = await axios.get(this.apiUrl);
      const endTime = new Date().getTime(); // End time of the API call
      const elapsedTime = endTime - startTime; // Calculate elapsed time
      // Display response code and data in the console
      console.log('Response Code:', response.status);
      console.log('Response Data:', response.data);
      console.log('Time Taken:', elapsedTime, 'milliseconds');

      // You can also add additional logic here to display data in VS Code output or notification
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


// Parse command-line arguments only if not being run as npm test script
if (!module.parent) {
  const argv = yargs
    .options({
      'url': {
        describe: 'API URL to test',
        demandOption: true,
        type: 'string',
      },
    })
    .help()
    .argv;

  const apiTester = new ApiTester(argv.url);
  apiTester.testApi();
}


module.exports = ApiTester; // Export ApiTester class for reuse
