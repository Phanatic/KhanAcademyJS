var request = require('request'),
  baseURI = 'http://www.khanacademy.org/api/v1';
// request.debug=true;
module.exports = {
  doGET: function (path, headers, done) {
    request.get({
      uri: `${baseURI}/${path}`,
      headers: {
        "Accept": "application/json"
      },
      json: true
    }, done);
  }
}
