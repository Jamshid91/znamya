const post = new Swiper('.swiper-sp-projects-posts', {
    loop: false,
    spaceBetween: 0,

    navigation: {
    nextEl: '.swiper-sp-projects-posts-next',
    prevEl: '.swiper-sp-projects-posts-prev',
  },
  
    breakpoints: {
      0: {
        spaceBetween: 24,  
        slidesPerView: 1,
        grid: {
            rows: 8,
            fill: 'row'
          },
      },
      767: {
        spaceBetween: 24,  
        slidesPerView: 1,
        grid: {
            rows: 6,
            fill: 'row'
          },
      },
      991: {
        spaceBetween: 16,  
        slidesPerView: 2,
        grid: {
            rows: 6,
            fill: 'row'
          },
      },
      1199: {
        spaceBetween: 20,  
        slidesPerView: 2,
        grid: {
            rows: 4,
            fill: 'row'
          },
      },
    }
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