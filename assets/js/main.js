var menuBtn = document.querySelector('.js-nav-toggle');

function toggleMenu(){
  const mainMenu = document.querySelector('.js-main-nav');
  mainMenu.classList.toggle('is-open');
}

menuBtn.addEventListener('click', toggleMenu)