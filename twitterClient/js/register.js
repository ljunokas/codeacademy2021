// nusistatome url i kuri visada bus kreipiamasi
let url = 'http://localhost:3000/api/v1'


document.getElementById('form').addEventListener('submit', async (event) => {
  event.preventDefault()

  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  if (!email || !password) return alert('Fill in form')

  let body = {
    email,
    password
  }
  // fetch funkcija priema du parametrus => url ir requesto nustatymus
  let response = await fetch(`${url}/user/signUp`, {
    // nusistatome request metoda
    method: 'POST',
    // siunciant duomenis visada turim nustatyti kokio tipo duomenis siunciam, siuo atveju json
    headers: {
      'Content-Type': 'application/json'
    },
    // pries siusdami i serveri duomenis juos paverciam i stringa (JSON.stringify())
    body: JSON.stringify(body)
  })
  // Pirmas atsakymas (response) bus statusas ir headeriai
  console.log(response)
  if (response.status != 200) return alert('Something went wrong')
  // kad pamatyti duomenis kuriu prasome is serverio reikia 'isparsinti' atsakyma
  let data = await response.json()

  console.log(data)

  window.location.href = './login'


})