$(document).ready(function() {
    // Выпадающие меню
    function openDropdown(elem) {
        $(".dropdown_menu").not($(elem).siblings(".dropdown_menu")[0]).slideUp(300);
        $(elem).siblings(".dropdown_menu").slideToggle(300);
        $(".header_search__input").slideUp(300);
    }
    // language=JQuery-CSS
    $(".dropdown_link").click(function () {
        openDropdown(this);
        return false;
    });

    // language=JQuery-CSS
    $('.main_slider').click(function () {
        $(".dropdown_menu").slideUp(300);
        return false;
    });

    // language=JQuery-CSS
    $(`.header_search__label`).click(function () {
        $(".dropdown_menu").slideUp(300);
        $(".header_search__input").slideToggle(300);

        return false;
    });

    $(".main_header .main_menu").click(function () {
        $(".side_menu").toggleClass("open");
        $(this).toggleClass("active");
        $("body").toggleClass("menu_open");
    });

    $(".mobile_header .main_menu").click(function () {

        $(".mobile_menu").slideToggle(300);
        $("body").toggleClass("menu_open");
    });
    $('.people-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        infinite: false
    });
    $('.client-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: false,
        infinite: false,
        adaptiveHeight: false
    });
    $('.contact-item').click(function(){
        $(this).siblings().find('.contact-drop').slideUp();
       $(this).find('.contact-drop').slideToggle();
    });
    $('.contact-drop').click(function(event){
       event.stopPropagation();
    });
    var $body = $(window.document.body);

    function bodyFreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('overflow', 'hidden');
        $body.css('marginRight', ($body.css('marginRight') ? '+=' : '') + ($body.innerWidth() - bodyWidth))
    }

    function bodyUnfreezeScroll() {
        var bodyWidth = $body.innerWidth();
        $body.css('marginRight', '-=' + (bodyWidth - $body.innerWidth()))
        $body.css('overflow', 'auto');
    }
    $('.expert-item').click(function () {
        $('.video-popup').addClass('active');
        bodyFreezeScroll();
    });
    $(document).mouseup(function (e) {
        var container = $(".contact-list");
        if (container.has(e.target).length === 0){
            $('.contact-drop').slideUp();
        }
        var container2 = $(".video-popup-container");
        if (container2.has(e.target).length === 0){
            $('.video-popup').removeClass('active');
            bodyUnfreezeScroll();
        }
    });
    $('.article-item-link').click( function(){
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length != 0) {
            $('html, body').animate({ scrollTop: $(scroll_el).offset().top - $('.main_header').height() }, 500);
        }
        return false;
    });
    $('.publication-item-link').click(function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings().find('.publication-item-link').removeClass('active');
    })
});
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.main_header').addClass('active');
    } else {
        $('.main_header').removeClass('active');
    }
});
