
// $('.header-btn').on('click', function (e) {
//     e.preventDefault();
//     $('.header').addClass('is-open');
//     $('body').addClass('scroll');
// });
// $('.header-logo a, .footer-logo a').on('click', function (e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, 1000);
//     return false;
// });
// $(document).mouseup(function (e){
//     var div = $('.header-phone');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//         $('.header-phone ul').removeClass('is-open');
//     }
// });
//
// $(function() {
//     var headerHeight = $('header').outerHeight(); // Target your header navigation here
//     $('.header-nav a').click(function(e) {
//         var targetHref   = $(this).attr('href');
//         $('html, body').animate({
//             scrollTop: $(targetHref).offset().top - headerHeight // Add it to the calculation here
//         }, 1000);
//         $('.header-nav__button').find('.icon').toggleClass('hidden');
//         $('.header-nav, .header-overlay').toggleClass('is-hidden');
//         $('body').toggleClass('scroll');
//         e.preventDefault();
//     });
// });
// $('.header-nav__button').on('click', function () {
//    var $this = $(this);
//     $this.find('.icon').toggleClass('hidden');
//     $('.header-nav, .header-overlay').toggleClass('is-hidden');
//     $('body').toggleClass('scroll');
// });
// $('.footer-nav').on('click', function () {
//     $('.header-nav__button').find('.icon').toggleClass('hidden');
//     $('.header-nav, .header-overlay').toggleClass('is-hidden');
//     $('body').toggleClass('scroll');
// });
// $('.header-overlay').on('click', function () {
//     $('.header-nav__button').find('.icon').toggleClass('hidden');
//     $('.header-nav, .header-overlay').toggleClass('is-hidden');
//     $('body').toggleClass('scroll');
// });
// $('.header-phone__btn').on('click', function () {
//     var $this = $(this);
//     $this.next().toggleClass('is-open');
// });
// function popupOpen() {
//     var $popupButton = $('.btn-popup');
//     $popupButton.on('click', function (e) {
//         var $this = $(this);
//         var popupButtonData = $this.data('popup');
//         $('.popup').removeClass('active');
//         $('div[data-popup = '+popupButtonData+']').addClass('active');
//         $('body').addClass('scroll');
//     });
// }
// popupOpen();
// $('.popup-close').on('click', function (e) {
//     var $this = $(this);
//     $this.parent().parent().removeClass('active');
//     $('.popup-overlay').removeClass('active');
//     $('body').removeClass('scroll');
// });
// $('.popup-overlay').on('click', function (e) {
//     var $this = $(this);
//     $this.removeClass('active');
//     $('.popup').removeClass('active');
//     $('body').removeClass('scroll');
// });
// function tabsInner(){
//     var tabItemNav = $('.tab-nav a');
//     var tabItem = $('.tab-item' );
//     tabItemNav.on('click', function(e){
//         e.preventDefault();
//         var $this = $(this),
//             tabItemId = $this.attr('href');
//         tabItemNav.removeClass('active');
//         $this.addClass('active');
//         tabItem.removeClass('active');
//         $('.tab-item__media').removeClass('media-animation');
//         $(tabItemId).addClass('active');
//         function explode(){
//             $('.tab-item__media').addClass('media-animation');
//         }
//         setTimeout(explode, 500);
//     });
// }
// tabsInner();
//
// if ($('.reviews-item').length > 3) {
//     $('.reviews-item:gt(2)').hide().removeClass('aos-init aos-animate');
//     $('.show-more').show();
// }
// $('.reviews-wrapper .show-more').on('click', function (e) {
//     var $this = $(this);
//     $this.find('span').toggleClass('hidden');
//     $('.reviews-item:gt(2)').toggle();
// });
// if ($('.product-item').length > 3) {
//     $('.product-item:gt(2)').hide().removeClass('aos-init aos-animate');
//     $('.show-more').show();
// }
// $('.catalog-wrapper .show-more').on('click', function (e) {
//     var $this = $(this);
//     $this.find('span').toggleClass('hidden');
//     $('.product-item:gt(2)').toggle();
// });

// $('.nav-btn').on('click', function (e) {
//     e.preventDefault();
//     $(this).toggleClass('is-active');
//     $('.top-nav').toggleClass('is-active');
// });
//
// $('.hero-slider').slick({
//     dots: true,
//     arrows: false,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
// });

$(window).on('scroll', function() {
    var $this = $(this),
        $header = $('.header');
    if ($this.scrollTop() >= $this.height()) {
        $header.addClass('header-scroll');
    }
    else{
        $header.removeClass('header-scroll');
    }
});
$('.btn-search').on('click', function (e){
    e.preventDefault();
    $('.header-search').addClass('active');
});
$('.search-close').on('click', function (e){
    e.preventDefault();
    $('.header-search').removeClass('active');
});
$('.hero-slider').slick({
    dots: true,
    arrows: false,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
$('.tab-nav a').on('click', function (e){
    e.preventDefault();
    var $this = $(this);
    var $thisTab = $this.data('tab');
    $this.parent().parent().find('a').removeClass('active');
    $this.parent().parent().next().find('.tab-item').removeClass('active');
    $this.addClass('active');
    $('div[data-tab = '+$thisTab+']').addClass('active');
});
$('.btn-popup').on('click', function (e){
    e.preventDefault();
    var $this = $(this);
    var $thisPopup = $this.data('popup');
    if($this.hasClass('active')){

    }else{
        $('body').addClass('scroll-h')
        $('.popup').removeClass('active')
        $('div[data-popup = '+$thisPopup+']').addClass('active');
    }
    // $this.parent().parent().find('a').removeClass('active');
    // $this.parent().parent().next().find('.tab-item').removeClass('active');
    // $this.addClass('active');
    // $('div[data-tab = '+$thisTab+']').addClass('active');
});
$('.popup-close').on('click', function (e){
    var $this = $(this);
    $this.parent().parent().removeClass('active');
    $('body').removeClass('scroll-h')
})
$('.popup-overlay').on('click', function (e){
    var $this = $(this);
    $this.parent().removeClass('active');
    $('body').removeClass('scroll-h')
})
$('.btn-nav').on('click', function (e){
    var $this = $(this);
    $this.toggleClass('active');
    $('body').removeClass('scroll-h')
})
$(document).mouseup(function (e){
    var headerSearch = $(".header-search");
    if (!headerSearch.is(e.target)
        && headerSearch.has(e.target).length === 0) {
        headerSearch.removeClass('active');
    }
});


$('input[type="tel"]').inputmask('+38 (999) 99-99-999 ');
