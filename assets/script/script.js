const navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function () {
     let window_position = window.scrollY > 0;
     navbar.classList.toggle('change_scroll_navbar_bg', window_position);
});

const mode = document.querySelector(".tombol-darkmode");
// mode.getAttributeNames()
// let darkmode = mode.getAttribute("data-mode");
// mode.addEventListener("click", function () {
//      if (darkmode == "darkmode") {
//           mode.setAttribute("data-mode", "lightmode")
//      } if (darkmode == "lightmode") {
//           mode.setAttribute("data-mode", "darkmode")
//      }
// })


mode.addEventListener('click', function () {
     const ic_darkmode = document.querySelector(".tombol-darkmode .fas");
     ic_darkmode.classList.toggle("dark-mode")
     const roothtml = document.querySelector(".root");
     roothtml.classList.toggle("root-dark-mode");

});