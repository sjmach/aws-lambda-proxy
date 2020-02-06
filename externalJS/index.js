const rp = require('request-promise');
console.log("Starting Function that calls the external service");

exports.handler = async (event, context) => {
      console.log("calling Lambda");
    const passcode = dataMessage.passcode;
    // End-point of external service
 return rp.post('XXXXXXXXX', {
  form: {
    passcode:passcode
  }
}).then(function (response) {
      console.log("Success");
      context.succeed(response);
    }).catch(function (err) {
        console.log("Found error: "+err);
    });
};