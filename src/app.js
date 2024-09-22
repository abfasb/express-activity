const express = require('express');
const bodyParser = require('body-parser');
const MyRoutes = require('../routes/MyRoutes')
const PORT = 5000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', MyRoutes);

app.listen((PORT), ()=> {
    console.log("Server is running at Port: " + PORT);
} )
