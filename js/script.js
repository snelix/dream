const swiper = new Swiper('.header__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
  });

  const swiperProperty = new Swiper(".property__swiper", {
    slidesPerView: 3.4,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      200: {
        slidesPerView: 1,
      },
      577: {
        slidesPerView: 1.6,
      },
      769: {
        slidesPerView: 2.1,
      },
      993: {
        slidesPerView: 2.5,
      },
      1201: {
        slidesPerView: 3.2,
      },
      1457: {
        slidesPerView: 3.4,
      }
    }
  });

  const swiperFeedback = new Swiper('.feedback__slider', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },

  });

  const menuBtn = document.querySelector('.menu-btn');
  const menuList = document.querySelector('.nav-group');

  menuBtn.addEventListener('click', ()=> {
    menuList.classList.toggle('active');
    menuBtn.classList.toggle('click');
  });
