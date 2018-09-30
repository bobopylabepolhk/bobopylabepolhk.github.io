const btn = document.getElementById('menu');
const header = document.getElementById('header');

btn.addEventListener('click', () => {
  header.classList.toggle('--menu-open');
});