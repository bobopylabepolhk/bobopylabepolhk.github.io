var menu = document.querySelector('.header-nav__burger-menu');
var list = document.querySelector('.header-nav-list')

menu.addEventListener('click', function(){
    this.classList.toggle('open');
    list.classList.toggle('unfolded');
}, true);