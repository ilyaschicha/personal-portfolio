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
