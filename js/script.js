//Burger-menu
let menu = document.querySelector('.header__menu');
let burger = document.querySelector('.header-burger');
let body = document.body;

burger.addEventListener('click', function(){
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   body.classList.toggle('lock');
})