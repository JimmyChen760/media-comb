const express = require('express');
const dotenv = require('dotenv').config();

const mongoose = require("mongoose");
const app = express();
const port = 5000;
// connecting to db
const connectDB = require('./config/dbCon');

connectDB();



const {api_key, api_secret_key, access_token, access_token_secret, client_id_linkedin} = process.env;


const oauth2URL_twitter = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${api_key}
&redirect_uri=https://localhost:5000&scope=tweet.read%20users.read%20offline.access&state=state&
oauth_callback=true`;
const oauth2URL_linkedin = `https://www.linkedin.com/oauth/v2/authorization?response_type=code&
state=987654321&scope=profile&client_id=${client_id_linkedin}&&redirect_uri=https%3A%2F%2Fgithub.com`;
app.get('/' , (req, res) => {
    res.send('Hello World');
});
app.get('/linkedin', (req, res) => {
    res.redirect(oauth2URL_linkedin);
});
app.get('/twitter', (req, res) => {
    res.redirect(oauth2URL_twitter);
});

mongoose.connection.once('open', () =>{
    console.log("connected to mongoDB")
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
});
// app.listen(port, () => {
//     console.log(`Server is running on port: ${port}`);
// });