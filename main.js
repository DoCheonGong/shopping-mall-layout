$(document).ready(function(){
    /* mouse enter/leave -> slide down/up */
    $("#gnb").on("mouseenter", function() {
        $(".sub").stop().slideDown();
    }); // stop()은 반복 이벤트 동작을 막기 위해 사용한다 (애니메이션에서 주로 쓴다)
    $("#gnb").on("mouseleave", function() {
        $(".sub").stop().slideUp();
    });
    /* add/remove transition effect on the main tab when mouse enter/leave */
    $("#gnb > li").on("mouseenter", function() {
        $(this).children("a").addClass("on");
    });
    $("#gnb > li").on("mouseleave", function() {
        $(this).children("a").removeClass("on");
    }); // this = #gnb > li

    /* tab */
    $(".tab > li").click(function () {
        $(".tab").find("li").removeClass("on");
        // $(".tab > li").removeClass("on"); // 절차 상의 문제로 위의 것을 쓴다
        $(".content").find("div").removeClass("on");

        $(this).addClass("on");
        /* 클릭한 대상의 a태그를 지정해서 그 a태그 안의 속성 "href"의 값을 변수에 담는다 */
        // var conId = $(.tab > li > a").attr("href"); // 잘못된 코드 
        var conId = $(this).children("a").attr("href");
        $(conId).addClass("on");
    }) // li 클릭 시 내용 불러오기

    // .find()와 .children()은 모두 앞 요소 뒤에 특정 요소를 붙이는 특징이 있지만 차이가 조금 있다

    /* slide */
    // img 태그를 이용한 슬라이더에서는 밑의 코드로 슬라이딩이 자연스럽지 않고 이미지만 바뀐다
    // 배경으로 넣은 이미지로 작성될 경우에만 적용된다
    // setInterval(function() {
    //     var current_index = $(".frame > li").filter(".on").index();
    //     var next_index;
        
    //     if (current_index != $(".frame > li").length - 1) {
    //         next_index = current_index + 1;
    //     } else {
    //         next_index = 0;
    //     }
        
    //     $(".frame > li").eq(current_index).filter(".on").stop().animate({"bottom": "-100%"}, 3000, function() {
    //         $(this).removeClass("on").hide();
    //     });
    //     $(".frame > li").eq(next_index).show().css({"bottom": "100%"}).animate({"bottom": "0%"}, 3000, function() {
    //         $(this).addClass("on")
    //     });
    // }, 3000);
    //clearInterval - removing setInterval
    setInterval(function() {
        $(".frame").animate({top: "-300px"}, function() {
            $(".frame > li").eq(0).appendTo(".frame");
            $(".frame").css({top: 0});
        })
    }, 3000);

    /* popup */
    $("#notice ul li a").on("click", function() {
        $(".popup").show();
        //$(".popup").css("display", "block");
    })
    $("#close").on("click", function() {
        $(".popup").hide();
        //$(".popup").css("display", "none");
    })
});