let text  = document.getElementById('text');
let leftside  = document.getElementById('leftside');
let rightside  = document.getElementById('rightside');

window.addEventListener('scroll', () => {
    let value = window.scrollY; 

    text.style.marginTop = value *1.0+ 'px';
    rightside.style.left = value * 1.5 + 'px';
    leftside.style.left = value * -1.5 + 'px'; 


});