let menuBtn = document.querySelector('.menu-btn_button');
let navBar = document.querySelector('.nav_bar');
let signin_signup_div = document.querySelector('.landing_page_signin_signup');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav_bar a');


menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
    signin_signup_div.classList.toggle('active');
};



window.onscroll = () => {

    menuBtn.classList.remove('fa-times');
    navBar.classList.remove('active');

}
