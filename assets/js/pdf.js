const post = new Swiper('.swiper-pdf', {
    loop: false,
    spaceBetween: 0,

    navigation: {
    nextEl: '.swiper-pdf-next',
    prevEl: '.swiper-pdf-prev',
  },
  
    breakpoints: {
      0: {
        spaceBetween: 24,  
        slidesPerView: 1,
        grid: {
            rows: 5,
            fill: 'row'
          },
      },
      767: {
        spaceBetween: 24,  
        slidesPerView: 1,
        grid: {
            rows: 8,
            fill: 'row'
          },
      },
      991: {
        spaceBetween: 16,  
        slidesPerView: 2,
        grid: {
            rows: 8,
            fill: 'row'
          },
      },
      1199: {
        spaceBetween: 20,  
        slidesPerView: 4,
        grid: {
            rows: 4,
            fill: 'row'
          },
      },
    }
  });


  const pagination = document.querySelector('.pagination-head');
  const bullets = document.querySelectorAll('.bullets .bullet');

  pagination.addEventListener('click', () => {
    pagination.parentElement.classList.toggle('showBullet')
  });

  bullets.forEach(bullet => {
    bullet.addEventListener('click', () => {
        pagination.parentElement.classList.remove('showBullet');

        pagination.children[0].textContent = bullet.textContent
      });
  })