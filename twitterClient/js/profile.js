let token;
let url = 'http://localhost:3000/api/v1'
let user;

window.addEventListener('DOMContentLoaded', () => {
  token = localStorage.getItem('twitterauth')

  if (!token) return window.location.href = './login'

  user = JSON.parse(localStorage.getItem('twitter-user'))

  setUpNavBar()
})

const setUpNavBar = async () => {
  document.getElementById('profileButton').innerHTML = user.email
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
  let profileImgElement = document.getElementById('profileImageInput')

  const formData = new FormData()

  formData.append('avatar', profileImgElement.files[0])
  formData.append('test', 'test')

  let response = await fetch(`${url}/user/updateUserInfo`, {
    method: 'POST',
    headers: {
      'twitterauth': token
    },
    body: formData
  })


}