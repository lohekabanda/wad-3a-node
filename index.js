const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, "public")))

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/home.html'))
})

app.get('/aboutus', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/aboutus.html'))
})

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/notfound.html'))
})

app.listen(port, ()=>{
    console.log('started...')
})