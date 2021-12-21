//Import dependencies
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
require('dotenv').config()

//Import modules
const route = require('./resources/routes');
const db = require('./config/db');

//Initialize server
const app = express();
const port = 5000;

//Connect to DB
db.connect(process.env.MONGO_URI)

//Public
app.use(express.static(path.join(__dirname, 'public')));

//Middleware config
app.use(express.urlencoded({
    extended: true,
}))
app.use(express.json())

//Set handlebars
app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Logger request
app.use(morgan('combined'));

//Main
const start = async() => {
    try {
        await route(app)
        app.listen(port, () => console.log(`Listening on port ${port}`));
    }
    catch(err) {
        throw(err)
    }
}

start()

// route(app);
// // app.get('/', (req,res) => {
// //     res.render('home')
// // })

// app.listen(port, () => console.log(`Listening on port ${port}`));
