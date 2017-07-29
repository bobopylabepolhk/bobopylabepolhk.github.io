var menu = document.getElementById('burgerMenuIcon');
var menuList = document.getElementById('burgerMenuList');

menu.addEventListener('click', function() {
    this.classList.toggle('open');
    menuList.classList.toggle('unfolded');
});