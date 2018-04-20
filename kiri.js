require("dotenv").config();
    
var Twitter = require ('twitter');

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'oesWHPD3WwFN7jQ5Sp4qfS4aB',
  consumer_secret: '3bftfevGoaOzyG0RZBSqU9P77FekHme6vBOSYNpcojBO7Emt9T',
  access_token_key: '593985455-yVrsus7RRGCfWQxZwZc82vqngdYRMDx9I2vSpeae',
  access_token_secret: 'pAcqzLCM0JMK29MfE4qFOS5i5g4rfAKE9XmshrssKOd6T',
  
});

/*client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body. 
    console.log(response);  // Raw response object. 
  });*/

  client.get('favorites/list', function(error, tweets, response) {
    if(error) throw error;
    console.log(tweets);  // The favorites. 
    console.log(response);  // Raw response object. 
  });
 

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});