let token;
let url = 'http://localhost:3000/api/v1'


window.addEventListener('DOMContentLoaded', () => {
  token = localStorage.getItem('twitterauth')
  if (!token) return window.location.href = './login'
})

document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault()

  let content = document.getElementById('content').value
  if (!content) return alert('provide content')

  let body = {
    content
  }

  try {
    let response = await fetch(`${url}/tweet`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'twitterauth': token
      },
      body: JSON.stringify(body)
    })

    if (response.status != 200) throw await response.json()

    let data = await response.json()
    console.log(data)

    document.getElementById('content').value = ''
    alert('Tweet created')

  } catch (e) {
    alert(e)
  }

})