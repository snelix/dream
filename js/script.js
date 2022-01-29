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
    spaceBetween: 32,
    pagination: {
      clickable: true,
    },
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