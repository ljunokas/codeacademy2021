let url = 'http://localhost:3000/api/v1'

document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault()

  let email = document.getElementById('email').value
  let password = document.getElementById('password').value

  if (!email || !password) return alert('Enter email and password')

  let body = {
    email,
    password
  }
  try {
    let response = await fetch(`${url}/user/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    // jeigu atsakymas is serverio yra klaida (kitaip sakant ne 200) tada stabdome funckija ir numetam i catch blocka
    if (response.status != 200) throw await response.json()
    //is response headerio pasiemam tokena kuri siunciam is serverio
    let token = response.headers.get('twitterauth')

    //tokena issaugom localstorage (narsykleje)
    localStorage.setItem('twitterauth', token)
    //Issaugom userio duomenis localstorate
    localStorage.setItem('twitter-user', await JSON.stringify(await response.json()))
    // siunciam useri i homepage
    window.location.href = './'
  } catch (e) {
    console.log(e)
    alert(e.message)
  }



})