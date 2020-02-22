var menuActions = document.querySelectorAll('.js-nav-toggle');

function toggleMenu(){
  const body = document.querySelector('body');
  body.classList.toggle('nav-is-open');
}

for (var i = 0; i < menuActions.length; i++) {
  menuActions[i].addEventListener('click', toggleMenu);
}
