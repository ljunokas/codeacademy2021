const express = require('express')
// body parser leidzia duomenis gauti ir siusti json formatu
const bodyParser = require('body-parser')

const router = require('./routes/routes')

const app = express();


// app.use suveikia pries visas kitas zemiau aprasytas funkcijas
app.use(bodyParser.json())


// norint pasiekti router turim kreiptis i localhost:3000/api/v1
app.use('/api/v1', router)




// requestas - kreipimasis i serveri, norint gaut ar issiust data
// get - requesto metodas
// '/' - requesto url
// (req, res) - req (request), res (response)
// res.send('') siunciam atgal i browseri stringa


// app.get('/', (req, res) => {
//   res.send('Hello from api!')
// })


// gali buti tas pats request url, bet skirtingos funkcijos
// app.post('/', (req, res) => {
//   let {
//     body
//   } = req
//   console.log(body)
//   res.send(`My name is ${body.name}`)
// })



// listen - pakurti serveri
// 3000 - portas

//https://twitter.lt:3000

app.listen(3000)