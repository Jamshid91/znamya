const block3 = new Swiper('.swiper-block3', {
  loop: true,
  grabCursor: false,
  spaceBetween: 0,
  slidesPerView: 1,
      navigation: {
      nextEl: '.swiper-block3-next',
      prevEl: '.swiper-block3-prev',
    },

});

const block5 = new Swiper('.swiper-block5', {
  loop: false,
  spaceBetween: 0,

  breakpoints: {
    0: {
      spaceBetween: 6,
      slidesPerView: 1.1,
    },
    767: {
      spaceBetween: 16,
      slidesPerView: 2.2,
    },
    991: {
      spaceBetween: 22,
      slidesPerView: 3.2,
    },
    1199: {
      spaceBetween: 22,  
      slidesPerView: 4,
    },
  }
});

const block6 = new Swiper('.swiper-block6', {
  loop: false,
  spaceBetween: 0,

  breakpoints: {
    0: {
      spaceBetween: 6,
      slidesPerView: 1.1,
    },
    767: {
      spaceBetween: 16,
      slidesPerView: 2.2,
    },
    991: {
      spaceBetween: 22,
      slidesPerView: 2.5,
    },
    1199: {
      spaceBetween: 22,  
      slidesPerView: 3,
    },
  }
});
