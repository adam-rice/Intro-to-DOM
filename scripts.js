var button = document.querySelector('#add');
var paragraph = document.querySelector('p');
var upper = document.querySelector('#upper');

button.addEventListener('click', function() {
  paragraph.innerText = 'Hello.';
});

upper.addEventListener('click', function() {
  var text = document.querySelector('p').innerText;
  var textChange = text.toUpperCase();
  document.querySelector("p").innerHTML = textChange;
});

var box = document.querySelector('.box');
var changeStyleButton = document.querySelector('.change-style');
var addClassButton = document.querySelector('.add-class');
var height = document.querySelector('.height');

changeStyleButton.addEventListener('click', function () {
  box.style.backgroundColor = 'red';
});

addClassButton.addEventListener('click', function () {
  box.classList.add('border');
});

height.addEventListener('click', function() {
  box.classList.add('xyz');
});

var colorInput = document.getElementById('color');
var sizeInput = document.getElementById('size');
var updateButton = document.querySelector('.update');


updateButton.addEventListener('click', function () {
  var color = colorInput.value;
  var size = sizeInput.value +'px';
  box.style.backgroundColor = color;
  box.style.width = size;
});
