const footer = document.getElementById('footer');
const trigger = document.getElementById('contacts');

trigger.addEventListener('click', e => {
  e.preventDefault();
  footer.scrollIntoView({ behavior: 'smooth' });
})