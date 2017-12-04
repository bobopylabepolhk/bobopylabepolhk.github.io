var icon = document.getElementById('menuIcon');
var menu = document.getElementById('menu');

icon.addEventListener('click', function(){
    this.classList.toggle('open');
    menu.classList.toggle('_unfolded');
});