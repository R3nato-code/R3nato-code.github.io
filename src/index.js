import express from "express"
import db from './database/db.js'


const app = express()
app.set('view engine', 'ejs');
app.set('views', './src/site')


app.get('/portifolio', (req, res) => {
    res.render('portifolio.ejs', db)
})

app.listen(81)