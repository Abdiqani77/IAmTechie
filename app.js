const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, '/public')
const viewsPath = path.join(__dirname, './views')
const partialsPath = path.join(__dirname, './views/partials')
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(express.static(publicDirectoryPath))
hbs.registerPartials(__dirname+ './views/partials')
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
})
app.get('/', (req,res) => {
    res.render('techie');
})
app.get('/about', (req,res) => {
    res.render('about');
})
app.get('/contact', (req,res) => {
    res.render('contact');
})
app.get('/reach', (req,res) => {
    res.render('reach');
})

app.listen(port, () => {
    console.log('Server is listening at port number ' + port);
})