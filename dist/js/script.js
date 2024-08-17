const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
});

$(function () {
  "use strict"

  $(document).ready(function () {
      $('.venobox').venobox();
  });

  // wow js
  new WOW().init();

  // tiny slider
  var slider = tns({
      container: '.testimonial-active',
      items: 1,
      slideBy: 'page',
      autoplay: false,
      mouseDrag: true,
      nav: false,
      controlsText: ['<i class="fas fa-angle-left prev"></i>', '<i class="fas fa-angle-right next"></i>'],
  });

  //   scrollit js
  $.scrollIt();
});