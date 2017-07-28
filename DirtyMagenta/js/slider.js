
function initializeSlider(next, prev, slidesArray, slider, navigation) {

    var timesClicked = 0;

//navigation progress tracker
    function classAdder (arr, counter, className) {
        arr[counter].classList.add(className);
    }

//navigation dots classRemover
    function classRemover (array, className){

        [].forEach.call(array, function(element){
            element.classList.remove(className);
        });

    }


//next
    next.addEventListener('click', function(){
    
    if(timesClicked !== slidesArray.length-1){
        timesClicked++;
        slider.style.left = '-' + timesClicked * 100 +'%';

        classRemover(navigation, 'active');
        classAdder(navigation, timesClicked, 'active');
    }
    
});

//prev
    prev.addEventListener('click', function(){

        if(timesClicked !== 0){
            timesClicked--;
            slider.style.left = '-' + timesClicked * 100 +'%';
            
            classRemover(navigation, 'active');
            classAdder(navigation, timesClicked, 'active');
        }

    });

}


//header slider
var headerSlider = document.getElementById('headerSlider');
var headerControlNext = document.getElementById('headerNext');
var headerControlPrev = document.getElementById('headerPrev');
var headerSlides = document.querySelectorAll('.header-slider-slide');
var headerNavigation = document.querySelectorAll('.header-slider-navigation-check');

initializeSlider(headerControlNext, headerControlPrev, headerSlides, headerSlider, headerNavigation);


//testemonials slider
var testemonialSlider = document.getElementById('testemonialSlider');
var testemonialsControlNext = document.getElementById('testemonialsNext');
var testemonialsControlPrev = document.getElementById('testemonialsPrev');
var testemonialsSlides = document.querySelectorAll('.testemonials-slide');
var testemonialsNavigation = document.querySelectorAll('.testemonials-slider-navigation-check');

initializeSlider(testemonialsControlNext, testemonialsControlPrev, testemonialsSlides, testemonialSlider, testemonialsNavigation);
