// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const hearts = document.getElementsByClassName('like-glyph');
for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', function(e) {
    like(e)
  })
}
function like(e) {
  let heart = e.target
  mimicServerCall("bogusUrl")
  .then(function(res) {
    if (heart.innerHTML == '♡') {
      heart.innerHTML = '♥'
    } else {
      heart.innerHTML = '♡'
    }
  })
  .catch(function(error) {
    let err = document.querySelector("#modal")
    err.class.remove()
  })
}

























//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
