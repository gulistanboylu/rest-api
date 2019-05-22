const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();

require('./database-connection')

app.get('/', (req, res) => {
    res.send('My awsome api :)')
});

app.use(bodyParser.json())
app.use(cookieParser())

const person = require('./routes/person')

app.use('/person', person)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

