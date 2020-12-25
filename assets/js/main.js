const topButton = document.getElementById('go-top-button');
let lastScrollTop = 0;
let timer;

//
// Function to check if you are scrolling up or down.
//
function scrollFunction() {
  if (timer) {
    window.clearTimeout(timer);
  }

  timer = window.setTimeout(function() {

    const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0 && lastScrollTop <= currentScroll) {
      lastScrollTop = currentScroll;
      topButton.classList.remove('is-active');
    } else if (currentScroll > 500) {
      lastScrollTop = currentScroll;
      topButton.classList.add('is-active');
    }

	}, 100);
}

// Add Event Listener for Scroll, everytime you scroll it runs this function
window.addEventListener('scroll', scrollFunction);

//
// Function to return to the top of the page
//
function scrollToTop() {
  document.documentElement.scrollTop = 0;
  topButton.classList.remove('is-active');
}

// Add Event Listener for topButton, click to go to the top.
topButton.addEventListener('click', scrollToTop);


//
// Dark/Light Mode Switch
//
const colourSwitch = document.querySelector('#colour-switch');
const body = document.querySelector('body');

function changeColourMode() {

  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
  } else {
    body.classList.add('dark-mode');
  }

}

colourSwitch.addEventListener('click', changeColourMode);
