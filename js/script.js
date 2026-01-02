$(document).ready(function () {

  /* ===========================
     VIDEO MODAL PLAY / PAUSE
  ============================ */
  const videoModal = document.getElementById('videoModal');

  if (videoModal) {
    const video = videoModal.querySelector('video');

    if (video) {
      videoModal.addEventListener('shown.bs.modal', function () {
        video.play();
      });

      videoModal.addEventListener('hidden.bs.modal', function () {
        video.pause();
        video.currentTime = 0;
      });
    }
  }

  /* ===========================
     MOBILE MENU
  ============================ */
  $('.mobile-menu-icon').on('click', function () {
    $('body').toggleClass('menu-open');
  });

  $('.close-menu').on('click', function () {
    $('body').removeClass('menu-open');
  });

  /* ===========================
     ARTICLES SLIDER
  ============================ */
  if ($('.artiles-items-slider').length) {
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
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  /* ===========================
     GALLERY SLIDER
  ============================ */
  if ($('.gallery-items-slider').length) {
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
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  /* ===========================
     QUOTES SLIDER
  ============================ */
  if ($('.quotes-slider').length) {
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
            centerPadding: '150px'
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerPadding: '50px'
          }
        },
        {
          breakpoint: 567,
          settings: {
            centerPadding: '0'
          }
        }
      ]
    });
  }

  /* ===========================
     TESTIMONIAL SLIDER
  ============================ */
  if ($('.testimonial-slider').length) {
    $('.testimonial-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false
    });
  }

  /* ===========================
     LIGHT GALLERY
  ============================ */
  if ($('#lightGallery').length && $.fn.lightGallery) {
    $('#lightGallery').lightGallery({
      mode: 'fade',
      speed: 800,
      caption: true,
      desc: true,
      mobileSrc: true
    });
  }

});
