let box = document.getElementById('box');
let greenButton = document.getElementById('greenButton');
let widenButton = document.getElementById('widenButton');
let heightenButton = document.getElementById('heightenButton');



//Тапсырма: 
greenButton.addEventListener('click', function() {
    box.style.backgroundColor = 'green';
});

box.style.width = '200px';
box.style.height = '200px';


widenButton.addEventListener('click', function(){
    let width = parseInt(box.style.width);
    box.style.width = (width + 20) + 'px';
} )


heightenButton.addEventListener('click', function() {
    let height = parseInt(box.style.height);
    box.style.height = (height + 20) + 'px';
});

//Мышкамен әрекет: 
box.addEventListener('mouseenter', function() {
    box.textContent = 'Сіздің мышкаңыз қораптың ішінде!';
});


box.addEventListener('mouseleave', function() {
    box.textContent = 'Сіздің мышкаңыз қораптан шығып кетті!';
});