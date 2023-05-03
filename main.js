$(document).ready(function(){
    /* mouse enter/leave -> slide down/up */
    $("#gnb").on("mouseenter", function() {
        $(".sub").stop().slideDown();
    });
    $("#gnb").on("mouseleave", function() {
        $(".sub").stop().slideUp();
    });
    /* add/remove transition effect on the main tab when mouse enter/leave */
    $("#gnb > li").on("mouseenter", function() {
        $(this).children("a").addClass("on");
    });
    $("#gnb > li").on("mouseleave", function() {
        $(this).children("a").removeClass("on");
    });
    /* button click -> hide popup */
    $(".popup button").on("click", function() {
        $(".popup").hide();
    })
    /* slider */
    $(".content div").hide();
    $(".tab > li > a").click(function () {
        $(".content div").hide().filter(this.hash).fadeIn(0);

        $(".tab > li").click(function () {
            $(this).addClass("on")
        })
        $(".tab > li").removeClass("on")
    }).filter(":eq(0)").click()
});