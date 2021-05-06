let user;

const signUp = (req, res) => {
  user = req.body
  res.send(req.body)
}

// req (request - uzklausa)
// req = {
//  body: {}
//  ip: 92.213.123.12
//  browser: "chrome v12.2.3.5.5"
//  header: {}
// }

// res (response - atsakymas)
// res.send() siunciam informacija atgal uzsakovui (front-end)

const signIn = (req, res) => {
  if (req.body.email !== user.email) {
    res.send('Wrong email')
  } else if (req.body.password !== user.password) {
    res.send('Wrong password')
  } else {
    res.send('Success')
  }
}


const currentUser = (req, res) => {
  res.send(user)
}
const logOut = (req, res) => {
  user = null
  res.send({
    message: 'Successfull log out'
  })
}

module.exports = {
  signUp,
  signIn,
  currentUser,
  logOut
}