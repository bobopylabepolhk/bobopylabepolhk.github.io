var elem = document.getElementById('grid');

if(window.innerWidth > 1090){
    var msnry = new Masonry (elem, {
        itemSelector:'.projects-grid-elem',
        percentPosition:true,
        columnWidth:'.--forth-width'
    });
}
