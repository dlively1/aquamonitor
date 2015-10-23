/**
 * just testing out calling the api
 */
var rp = require('request-promise');

var options = {
    method: 'POST',
    uri: 'http://0.0.0.0:5000/api/readings',
    json: true
};


exports.createReading = function(temp) {

  options.body = {
    temperature: temp,
    reading_time: Date.now()
  }

  return rp(options);
}
