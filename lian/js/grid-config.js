if(window.innerWidth <= 750) {
    var msnry = new Masonry( '.gallery-grid');
    msnry.destroy()
}

else {
    var msnry = new Masonry( '.gallery-grid', {
        columnWidth: 360,
        itemSelector: '.gallery-grid__item',
        fitWidth: true,
        gutter: 30
    });
}