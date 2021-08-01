const navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function () {
     let window_position = window.scrollY > 0;
     navbar.classList.toggle('change_scroll_navbar_bg', window_position);
});