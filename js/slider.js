
$.js = function (el) {
    return $('[data-js=' + el + ']')
};

function carousel() {
  $.js('timeline-carousel').slick({
    infinite: true,
    arrows: true,
    prevArrow: '<div class="slick-prev"> <div class="btn d-flex justify-content-center align-items-center"> <img src="images/left.png"/></div></div>',
    nextArrow: '<div class="slick-next"> <div class="btn d-flex justify-content-center align-items-center"> <img src="images/next.png"/> </div></div>',
    dots: false,
    autoplay: false,
    speed: 1100,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
  });
}

carousel();