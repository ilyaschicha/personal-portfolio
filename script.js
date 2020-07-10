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
