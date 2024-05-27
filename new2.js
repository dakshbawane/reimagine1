var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: 3,
    grabCursor: true,
    spaceBetween: 30,
    loop: true,
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
  });

  
// var swiper = new Swiper(".mySwiper", {
//     effect: "coverflow",
//     grabCursor: true,
//     slidesPerView: 3,
//      spaceBetween: 30,
//      loop: true,
//     centeredSlides: true,
//     coverflowEffect: {
//       rotate: 0,
//       stretch: 0,
//       depth: 100,
//       modifier: 3,
//       slideShadows: true
//     },
//     loop: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true
//     },
//     breakpoints: {
//       640: {
//         slidesPerView: 2
//       },
//       768: {
//         slidesPerView: 2
//       },
//       1024: {
//         slidesPerView: 3
//       },
//       1560: {
//         slidesPerView: 3
//       }
//     }
//   });
  