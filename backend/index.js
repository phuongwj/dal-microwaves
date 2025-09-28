require('dotenv').config();

const express = require('express')
const bodyParser = requier('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.status(200).send("Hello World")
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})