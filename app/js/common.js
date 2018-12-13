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
    $(document).mouseup(function (e) {
        var container = $(".contact-list");
        if (container.has(e.target).length === 0){
            $('.contact-drop').slideUp();
            console.log('wwww')
        }
    });
});
