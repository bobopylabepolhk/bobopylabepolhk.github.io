var body = document.getElementById('body');
var colors = ['#5D1708', '#085D42', '#56E56F', '#E56F56', '#E5567E', '#421D4F', '#DEB14A'];
//var randomColor = Math.random.apply(null, colors);

function randomColor(arr) {
    return Math.floor(Math.random() * (0 - arr.length) + arr.length);
}

body.style.backgroundColor = colors[randomColor(colors)];