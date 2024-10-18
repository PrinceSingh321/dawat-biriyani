function fnRegisterHeading(){
    var windowWidth = $(window).width();
    if (windowWidth <= 992) {
      $('.register-right-sec .heading-wrap h1').insertAfter('.register-heading-mob');
    }
}

function fnFotterAccordian(){
    $(document).ready(function(){
        $(".footer-col").click(function() {
          var detailWrap = $(this).find(".footer-detail-wrap");
          if (detailWrap.length === 0) {
            $(".footer-detail-wrap:visible").slideUp();
          } else {
            $(".footer-detail-wrap").not(detailWrap).slideUp();
            detailWrap.slideToggle();
            
          }
        });
      });
      
}

function fnScrollDown(){
    $('.down-arrow').on('click', function() {
        var currentDiv = $(this).closest('section');  
        var nextDiv = currentDiv.next('section'); 
        
        if(nextDiv.length) {
            $('html, body').animate({
                scrollTop: nextDiv.offset().top
            }, 800); 
        }
    });
}

function fnbottomToTop(){
    if($(".backTopbtn").length > 0){
  var scrollToTopBtn = document.querySelector(".backTopbtn")
  var rootElement = document.documentElement
  function handleScroll() {
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal ) > 0.20) {
      // Show button
      scrollToTopBtn.classList.add("active")
    } else {
      // Hide button
      scrollToTopBtn.classList.remove("active")
    }
  }
  
  function scrollToTop() {
    // Scroll to top logic
  //var webpageUrl = window.location.pathname; 
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  
  }
  
  scrollToTopBtn.addEventListener("click", scrollToTop)
  document.addEventListener("scroll", handleScroll)
    }
  }

  function fnAnimation(){
    AOS.init({
        duration: 1200,
      })
  }