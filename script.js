// this fuction work with desktop version and mobile version for change the theme of navigation bar
$(window).scroll(function(e){
  // this part fuction work with desktop version
  if ($(this).width() > 767) {
    if ($(this).scrollTop() > 60){
       $('nav').addClass('scrolled');
       $(".nav-link").css("color", "#000");
       $(".navbar-brand").css("color", "#000");
       $('.navbar-toggler-icon').addClass('dark-toggler-icon');
       // $(".btn-nav:after").css("background", "#000");
       $(".btn-nav").append('<style>.btn-nav:after{background: #000;}</style>');
       // $("div").remove(".mouse");
    } else {
      // $(".mouse-container").after("<div class=\"mouse\"></div>");
       $('nav').removeClass('scrolled');
       $(".nav-link").css("color", "white");
       $(".navbar-brand").css("color", "white");
       $('.navbar-toggler-icon').removeClass('dark-toggler-icon');
       $(".btn-nav").append('<style>.btn-nav:after{background: white;}</style>');

      }
  }
  // this part fuction work with mobile version
  else {
    $('nav').addClass('scrolled');
    $(".nav-link").css("color", "#000");
    $(".navbar-brand").css("color", "#000");
    $('.navbar-toggler-icon').addClass('dark-toggler-icon');
    $(".btn-nav").append('<style>.btn-nav:after{background: #000;}</style>');
  }

});
$(window).width(function(e){
  if ($(this).width() < 991) {
    $('nav').addClass('scrolled');
    $('.navbar-toggler-icon').addClass('dark-toggler-icon');
    $(".nav-link").css("color", "#000");
    $(".navbar-brand").css("color", "#000");
    $(".btn-nav").append('<style>.btn-nav:after{background: #000;}</style>');
  }
});
// this function use to change the icon in the landing section
$(".img-social").hover(function(){
    $(this).attr("src", function(index, attr){
        return attr.replace(".png", "-active.png");
    });
}, function(){
    $(this).attr("src", function(index, attr){
        return attr.replace("-active.png", ".png");
    });
});
/* when you click the hamberger icon in the naveigation (mobile version) bar
this function make the back of the navigation bar hidden  */
$(".navbar-toggler").on('click', function(){
    $("html, body").toggleClass("body-overflow");
});
