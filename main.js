$(document).ready(function(){
    $("#gnb").on("mouseenter", function() {
        $(".sub").stop().slideDown(); // Slide down - 조금씩 내려가기
    });
    $("#gnb").on("mouseleave", function() {
        $(".sub").stop().slideUp(); // Slide up - 조금씩 올라가기
    });

    $("#gnb > li").on("mouseenter", function() {
        $(this).children("a").addClass("on"); // this = #gnb > li
    });
    $("#gnb > li").on("mouseleave", function() {
        $(this).children("a").removeClass("on");
    });
}); // defer의 효과