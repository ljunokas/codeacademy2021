let token;
let url = 'http://localhost:3000/api/v1'

window.addEventListener('DOMContentLoaded', () => {
  token = localStorage.getItem('twitterauth')
  if (!token) return window.location.href = './login'
  getAllTweets()
})

const getAllTweets = async () => {
  let response = await fetch(`${url}/tweet`, {
    method: 'GET'
  })

  let tweets = await response.json()
  console.log(tweets)
  showTweets(tweets)

}

const showTweets = (tweets) => {
  for (let tweet of tweets) {
    let card = `<div class="card mb-3 p-3 w-50">
      <div class="row g-0 ">
        <div class="col-md-2 mt-4">
          <img class="rounded-circle" style="display: block; width: 100%;" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="...">
        </div>
        <div class="col-md-10">
          <div class="card-body">
            <h5>${tweet.userId ? tweet.userId.email : 'anonymous'}</h5>
            <p class="card-text">
              ${tweet.content}</p>
            <div>
              <i class="bi bi-heart-fill"></i>

              <span>${tweet.likesCount}</span>
              <span>Likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>`
    let cardContainer = document.getElementById('cardContainer')
    cardContainer.innerHTML += card
  }
}