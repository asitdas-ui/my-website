$(document).ready(function () {
  $('.artiles-items-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 2800,
    speed: 600,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }); 
  $('.gallery-items-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  });
  $('.quotes-slider').slick({
    infinite: true,
    dots: false,
    centerMode: true,
    centerPadding: '250px',
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerPadding: '150px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: '50px',
        }
      },
      {
        breakpoint: 567,
        settings: {
          centerPadding: '0',
        }
      }
    ]
  }); 
  $('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  });
  
  $('.mobile-menu-icon').on('click', function() {
    $('body').toggleClass('menu-open');
  });
  $('.close-menu').on('click', function() {
    $('body').removeClass('menu-open');
  });
  $("#lightGallery").lightGallery({
    mode:"fade",
    speed:800,
    caption:true,
    desc:true,
    mobileSrc:true
  });
});

