function fnthreeCardSlider(){
$(".threeCardSlider").each(function() {
  var $this = $(this);
  var numberOfSlides = $this.find('.swiper-slide').length;
  
  var threeImgswiper = new Swiper(this, {
      direction: 'horizontal',
      parallax: true,
      slidesPerView: 3,
      spaceBetween: 40,
      scrollbar: {
          el: $this.find('.swiper-scrollbar')[0],
          draggable: true,
      },
      speed: 1500,
      navigation: {
          nextEl: $this.find('.swiper-button-next')[0],
          prevEl: $this.find('.swiper-button-prev')[0],
      },
      breakpoints: {
          991: {
              slidesPerView: 3,
          },
          481: {
              slidesPerView: 2,
              spaceBetween: 30,
              loop: true
          },
          320: {
              slidesPerView: 1,
              spaceBetween: 30,
              loop: true
          },
      },
      on: {
          slideChange: function() {
              checkButtonState();
          },
      }
  });

  function checkButtonState() {
      var nextButton = $this.find('.swiper-button-next');
      var prevButton = $this.find('.swiper-button-prev');
      
    //   if (numberOfSlides > 3) {
    //       nextButton.show();
    //       prevButton.show();
    //   } else {
    //       nextButton.hide();
    //       prevButton.hide();
    //   }
  }

  // Initial check
  checkButtonState();

  // Ensure buttons are not locked if more than 4 slides exist
  setTimeout(function(){
      if (numberOfSlides > 3) {
          $this.find('.swiper-button-next').removeClass('swiper-button-lock');
          $this.find('.swiper-button-prev').removeClass('swiper-button-lock');
      }
  }, 1000);
});
}