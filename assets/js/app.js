// const banner = document.querySelector('.banner');
// const header =  document.querySelector('.header')
// window.onscroll = function() {scrollFunction(banner.offsetHeight)};
// function scrollFunction(scollHeight) {
//   if (document.body.scrollTop > scollHeight  || document.documentElement.scrollTop > scollHeight ) {
//     header.classList.add('active')
//   } else {
//     header.classList.remove('active')
//   }
// }

$(document).ready(function() {
  // if($(window).width() < 993) {
  //   window.onscroll = function() {scrollFunction(0)};
  // }
  $('.nav-link:not(.lang-link)').on('click',function(){
    if($(this).hasClass('show')){
      $('.banner .topbar').addClass('position-fixed');
      $('.banner .topbar').css('top',`${$('.header').outerHeight()}px`);
    }
    else {
      $('.banner .topbar').removeClass('position-fixed');
      $('.banner .topbar').css('top','0px');
    }
  })
});




if (typeof Swiper !== 'undefined') {
  const blogSwiper = new Swiper('.blog-swiper', {
    slidesPerView: 3,
    spaceBetween: 100,
    // loop:true, 
    breakpoints: {
      0: {
        slidesPerView: 1.5,
        spaceBetween: 50,
      },
      768: {
        slidesPerView: 1.5,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 1.7,
        spaceBetween: 50,
      },
    },
  })

  const reviewSwiper = new Swiper('.review-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
  })
}



 
