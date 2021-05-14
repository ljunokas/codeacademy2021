let token;
let url = 'http://localhost:3000/api/v1'
let user;

window.addEventListener('DOMContentLoaded', () => {
  token = localStorage.getItem('twitterauth')

  if (!token) return window.location.href = './login'

  user = JSON.parse(localStorage.getItem('twitter-user'))

  setUpNavBar()
  getMyTweets()
})

const setUpNavBar = async () => {
  document.getElementById('profileButton').innerHTML = user.email
  console.log(user)
  if (user.profileImage) document.getElementById('navProfileImage').src = user.profileImage
}

const logOut = async () => {
  let response = await fetch(`${url}/user/logOut`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'twitterauth': token
    }
  })

  localStorage.removeItem('twitterauth')
  localStorage.removeItem('twitter-user')

  window.location.href = './login.html'

}

const updateProfile = async () => {
  console.log(1)
  let profileImgElement = document.getElementById('profileImageInput')

  const formData = new FormData()

  formData.append('avatar', profileImgElement.files[0])
  try {

    let response = await fetch(`${url}/user/updateUserInfo`, {
      method: 'POST',
      headers: {
        'twitterauth': token
      },
      body: formData
    })

    if (response.status != 200) throw await respnse.json()
    user = await response.json()
    localStorage.setItem('twitter-user', JSON.stringify(user))
  } catch (e) {

  }
}

const getMyTweets = async () => {
  let response = await fetch(`${url}/myTweets`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'twitterauth': token
    }
  })

  let data = await response.json()
  console.log(data)

}