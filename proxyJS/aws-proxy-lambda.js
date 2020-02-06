var AWS = require("aws-sdk");

exports.handler = async (event, context, callback) => {
console.log("Starting Function that behaves like a proxy");
var responseCode = 200;
var passcode;
if (event.body) {
        console.log("Read data passed by user");
        let body = JSON.parse(event.body);
        /// Get Parameters from form
        if (body.passcode) 
            passcode= body.passcode;
    }
    
    // form data
var postData = {
  passcode: passcode,
};

// TopicArn should be the SNS Topic ARN
var params ={
    Message: JSON.stringify(postData),
    TopicArn: "XXXXXXXXX"
};
var response = {
        statusCode: responseCode,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: "Data has been saved"
    };


/// FIX for Options request
if(event.httpMethod =="OPTIONS"){
    context.succeed(response);
    return 0;
}
var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();
// Handle promise's fulfilled/rejected states and publish data to an SNS topic
return publishTextPromise.then(
  function(data) {
console.log("MessageID is " + data.MessageId);
     context.succeed(response);
     return 0;
    
  }).catch(
    function(err) {
    console.error(err, err.stack);
     callback(err);
      context.error("Failed");
        return 1;
  }); 
};
