// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  const errorModal = document.getElementById("modal");
  const errorMessage = document.getElementById("modal-message");
  const hearts = document.querySelectorAll(".like-glyph");

  // Ensure the modal starts hidden
  if (errorModal) {
      errorModal.classList.add("hidden");
  }

  hearts.forEach(heart => {
      heart.addEventListener("click", () => {
          mimicServerCall()
              .then(() => {
                  if (heart.classList.contains("activated-heart")) {
                      heart.classList.remove("activated-heart");
                      heart.textContent = '♡'
                  } else {
                      heart.classList.add("activated-heart");
                      heart.textContent = '♥'
                  }
              })
              .catch((error) => {
                  if (errorModal) {
                      errorMessage.textContent = error;
                      errorModal.classList.remove("hidden");

                      // Hide the modal after 3 seconds
                      setTimeout(() => {
                          errorModal.classList.add("hidden");
                      }, 3000);
                  }
              });
      });
  });
});





//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
