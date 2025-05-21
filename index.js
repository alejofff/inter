const express = require('express');
const session = require('express-session');
const path = require('path');
const hbs = require('hbs');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(session({ secret: 'interagro', resave: false, saveUninitialized: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static('public'));
hbs.registerPartials(path.join(__dirname, 'src/views/partials'));

const authRoutes = require('./src/routes/auth.routes');
app.use('/', authRoutes);

app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));