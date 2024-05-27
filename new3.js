const arrr=[
  {productImage:"https://media.istockphoto.com/id/470731269/photo/scoops-of-mango-sorbet.webp?b=1&s=170667a&w=0&k=20&c=bgm0vYICaCE0lGxKh19LVCwEeTVYvy0NJmcEoHPzeNY=",
  productName:"MANGO ICECREAM",
  productDes:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero corrupti animi aliquam nesciunt inventore aliquid aperiam, incidunt minima delectus voluptatem aut molestiae assumenda praesentium cumque veritatis, eum sunt porro et quis consectetur neque sed.",
  seasonImage:"https://png.pngtree.com/background/20230317/original/pngtree-summer-beach-cartoon-background-picture-image_2149311.jpg",
  season:"Summer"
  },
  {
  productImage:"https://media.istockphoto.com/id/502067212/photo/watermelon-ice-cream-in-bowl.webp?b=1&s=170667a&w=0&k=20&c=gYSWAPpaZ2w-KpLOzB1mUb70A_1toVBaNHbSdpDnM2A=",
  productName:"WATERMELON ICECREAM",
  productDes:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero corrupti animi aliquam nesciunt inventore aliquid aperiam, incidunt minima delectus voluptatem aut molestiae assumenda praesentium cumque veritatis, eum sunt porro et quis consectetur neque sed.",
  seasonImage:"https://png.pngtree.com/background/20230317/original/pngtree-summer-beach-cartoon-background-picture-image_2149311.jpg",
  season:"Summer"
  },
  {
  productImage:"https://media.istockphoto.com/id/520982830/photo/ice-cream-in-a-coconut.webp?b=1&s=170667a&w=0&k=20&c=zDe-yRwaanR4e2AAxWH-SxCKVuNCYklGvuIgMOq4nKs=",
  productName:"COCONUT ICECREAM",
  productDes:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero corrupti animi aliquam nesciunt inventore aliquid aperiam, incidunt minima delectus voluptatem aut molestiae assumenda praesentium cumque veritatis, eum sunt porro et quis consectetur neque sed.",
  seasonImage:"https://png.pngtree.com/background/20230317/original/pngtree-summer-beach-cartoon-background-picture-image_2149311.jpg",
  season:"Summer"
  },
  {
  productImage:"https://th.bing.com/th/id/OIP.eiZ5dG2vHq2v_vX2i4RpqgHaE9?w=231&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  productName:"MUSKMELON ICECREAM",
  productDes:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero corrupti animi aliquam nesciunt inventore aliquid aperiam, incidunt minima delectus voluptatem aut molestiae assumenda praesentium cumque veritatis, eum sunt porro et quis consectetur neque sed.",
  seasonImage:"https://png.pngtree.com/background/20230317/original/pngtree-summer-beach-cartoon-background-picture-image_2149311.jpg",
  season:"Summer"
  },
  {
  productImage:"https://media.istockphoto.com/id/1345295716/photo/a-scoop-of-grape-flavored-purple-ice-cream-served-in-a-white-bowl-close-up-of-gastronomic.webp?b=1&s=170667a&w=0&k=20&c=43PuOivpr6pTSjliBobYnDF7Ty-2jRe7oZBqx8Aqj-w=",
  productName:"BLACK GRAPES ICECREAM",
  productDes:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vero corrupti animi aliquam nesciunt inventore aliquid aperiam, incidunt minima delectus voluptatem aut molestiae assumenda praesentium cumque veritatis, eum sunt porro et quis consectetur neque sed.",
  seasonImage:"https://img.freepik.com/premium-photo/little-girl-sitting-rock-rain-she-is-wearing-yellow-raincoat-red-boots-holding-red-umbrella_14117-419180.jpg?w=1380 ",
  season:"Monsoon"
  }
      
]

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

    on: {
      init: function () {
        arrr.forEach((product) => {
          const slide = `

          
            <div class="swiper-slide">
              <img src="${product.productImage}" alt="">
            </div>`;




          this.appendSlide(slide);
        });
      },
    },
  });




  const page2 = document.getElementById("page2");

// Update background image on slide change
swiper.on('slideChange', function () {
  const currentSlideIndex = this.activeIndex;
  const currentSeason = arrr[currentSlideIndex].season;
  page2.style.backgroundImage = `url(${arrr[currentSlideIndex].seasonImage})`;
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
  