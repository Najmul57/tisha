// about slider
$('.about_photo').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  arrows: false,
  dots: false,
  autoplaySpeed: 1000,
});


// eid slider
$('.review__active').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade: true,
  arrows: false,
  dots: true,
  autoplaySpeed: 2000,
});


// object select element
const selectElement = {
  dropdownBtn: document.getElementsByClassName("dropdown_button"),
  subNavItem: document.getElementsByClassName("dropdown_sub"),
}

// element destructure
let { dropdownBtn, subNavItem } = selectElement

  ;[...dropdownBtn].forEach((innerBtn, index) => {
    let innerNav = subNavItem[index];
    innerBtn.addEventListener("click", function () {
      $(innerNav).slideToggle();
      $(".dropdown_sub").not(innerNav).slideUp();
      $(".dropdown_button").removeClass("active");
      $(innerBtn).toggleClass("active");
    });
  });


// gallery
$('.single_gallery').magnificPopup({
  type: 'image',
  gallery: {
    enabled: true
  }
});
// video popup
$(".popup-video").magnificPopup({
  type: "iframe",
  mainClass: "mfp-fade",
  removalDelay: 160,
  preloader: false,
  fixedBgPos: true, fixedContentPos: true,
  // fixedContentPos: false,
});


//aos

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
