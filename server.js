// ----------------------------------------------------
// --- S E R V E R . J S ------------------------------
// ----------------------------------------------------
// Entry point into application.  
// Dan Orlovsky

// INCLUDES
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();


// SETS UP OUR STATIC DIRECTORY
app.use(express.static("public"))

// INCLUDES THE BODYPARSER MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

// SETS UP OUR VIEW ENGINE
app.engine('handlebars', exphbs({defaultLayout: 'main' }))
app.set('view engine', 'handlebars');

// CONFIGURE MONGOOSE
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/news-scraper");

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Application started");
});