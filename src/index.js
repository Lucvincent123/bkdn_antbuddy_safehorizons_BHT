const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { engine } = require('express-handlebars');
const route = require('./resources/routes');
const app = express();
const port = 5000;

app.use(express.static(path.join(__dirname, 'public')));

app.engine('hbs', engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(morgan('combined'));

route(app);
// app.get('/', (req,res) => {
//     res.render('home')
// })

app.listen(port, () => console.log(`Listening on port ${port}`));
