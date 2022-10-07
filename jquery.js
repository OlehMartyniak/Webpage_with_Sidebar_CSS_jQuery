$(document).ready(function(){
    //jquery for toggle sub-menus
    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
        // rotate icon
        $(this).find(".dropdown").toggleClass("rotate");
    })
   // jquery for expand and collapse the sidebar
    $(".menu-btn").click(function(){
        $(".side-bar").addClass("active");
    })
    $(".close-btn").click(function(){
        $(".side-bar").removeClass("active");
    })
})