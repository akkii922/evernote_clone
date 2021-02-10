require('dotenv').config();
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors')
const port = process.env.port;

app.use(cors());

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

require(`${__dirname}/app/routes`)(app);

app.listen(port, () => {
    console.log(`Example app listening at ${port}`)
})