const express = require('express');
const dotenv = require('dotenv').config();
const axios = require('axios');
// const {TwitterApi} = require('twitter-api-v2');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const {api_key, api_secret_key, access_token, access_token_secret, bearer_token} = process.env;
// const client = new TwitterApi({
//     appKey: api_key,
//     appSecret: api_secret_key,
//     accessToken: access_token,
//     accessSecret: access_token_secret,
// });
const oauthURL = `https://api.twitter.com/oauth/authorize?oauth_token=${api_key}`;
// console.log(oauthURL);
// const getTweets = async () => {

//     try {
//       const response = await axios.get('https://api.twitter.com/2/tweets', {
//         headers: {
//           'Authorization': `Bearer ${bearer_token}`
//         },
//         params: {
//           'ids': '1453489038376136707,1453488838376136707'  // Replace with the tweet IDs you want to fetch
//         }
//       });
//       console.log(response.data);
//     } catch (error) {
//       console.error('Error fetching tweets:', error);
//     }
//   };
app.listen(port, () => {
    // getTweets();
    console.log(`Server is running on port: ${port}`);
});