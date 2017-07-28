var burgerMenu = document.getElementById('burger-menu');
var menu = document.getElementById('nav-menu');

burgerMenu.addEventListener('click', function(){
    this.classList.toggle('open');
    menu.classList.toggle('_unfolded');
});
