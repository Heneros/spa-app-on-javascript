const express = require('express')
const path = require('path')
const app = express()


app.use(express.static('public'))

app.get('/section', (req, res) =>{
	res.send('Hello Word')
})

app.listen(3000, ()=> console.log('App listening on port 3000'));