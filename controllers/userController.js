const bcrypt = require('bcrypt')
const User = require('../models/userModel')


const signUp = async (req, res) => {
  try {
    // bcrypt pries saugojant i duomenu baze uzhashinam passworda, ir jau saugom hasha vietoj tikrojo passwordo
    let hash = bcrypt.hashSync(req.body.password, 10)

    const user = new User({
      email: req.body.email,
      password: hash
    })

    let newUser = await user.save()
    res.send(newUser)

  } catch (e) {
    res.status(400).send(e)
  }
}

const getAllUsers = async (req, res) => {
  const allUsers = await User.find()
  res.send(allUsers)
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

const signIn = async (req, res) => {
  try {
    // paemam useri is database pagal email, nes emailas yra unikalus
    let user = await User.findOne({
      email: req.body.email
    })
    // siunciam error jeigu buvo nerastas useris su tokiu emailu
    if (!user) throw {
      message: 'Wrong email'
    }
    // patikrinam ar siustas userio passwordas kai jis yra uzhashintas sutampa su duombazej hashintu passwordu
    let passwordMatch = bcrypt.compareSync(req.body.password, user.password)
    // jei ne siunciam error
    if (!passwordMatch) throw {
      message: 'Wrong password'
    }
    // jei viskas ok siunciam userioobjekta
    res.send(user)

  } catch (e) {
    res.status(400).send(e)
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
  logOut,
  getAllUsers
}