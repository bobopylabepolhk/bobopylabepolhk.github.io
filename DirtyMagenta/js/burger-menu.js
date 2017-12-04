var menuIcon = document.getElementById('burgerMenu');
var menu = document.getElementById('menu');

menuIcon.addEventListener('click', function(){
    this.classList.toggle('open');
    menu.classList.toggle('unfolded');
});
