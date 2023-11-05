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

