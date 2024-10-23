function fnNavbar(){
 $("#nav-icon3").on('click', function(){
    $(".navbar").toggleClass('open');
    $(this).toggleClass('open');
 })

 if($(window).width() <= 992){
 $('.drop-down-memu > a').click(function(e) {
    e.preventDefault();
    // Close any other open dropdowns
    $('.drop-down-memu').not($(this).parent()).slideDown();
    $('.drop-down-memu').not($(this).parent()).find('.sub-menu').slideUp();

    // Toggle the current dropdown
    $(this).parent().slideDown()
    $(this).next('.sub-menu').stop(true, true).slideToggle();
  });

 }
}
function fnSeacrhbar(){
    $('.search-icon > a').on('click', function(){
        $('.SearchOverlay').addClass('active');
    })
    $('.close-serachbox').on('click', function(){
        $('.SearchOverlay').removeClass('active');
    })
}