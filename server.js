var express = require('express');
var path = require('path');
const PORT = 9000
const session = require('express-session');
const passport = require('passport')
var cookieParser = require('cookie-parser');
const methodOverride = require('method-override')
const mealPrepRoutes = require('./routes/recipeRoutes');

// require('dotenv').config();
require('./config/database.js')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use('/', mealPrepRoutes)


app.listen(PORT, function() {
    console.log('ITS OVER', PORT)
})