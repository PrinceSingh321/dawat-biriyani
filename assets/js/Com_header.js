function fnNavbar(){
 $("#nav-icon3").on('click', function(){
    $(".navbar").toggleClass('open');
    $(this).toggleClass('open');
 })

$('.drop-down-nemu > a').on('click', function(e) {
    e.preventDefault();
    var $currentSubMenu = $(this).siblings('.sub-menu');
    $('.sub-menu').not($currentSubMenu).slideUp();
    $currentSubMenu.slideToggle();
});
}