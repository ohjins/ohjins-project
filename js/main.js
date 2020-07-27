
//메뉴 이동 스크립트
function offsetMove(i){
  var offset = $(".set"+ i).offset().top;
  $('html, body').animate({scrollTop : offset}, 400); 
}
//메뉴 글자 컬러 스크립트
$(function(){
  $(".menu > ul > li").click(function(){
    $(this).addClass("active").siblings().removeClass("active");
  });
});



$(function(){
  $(".mo_menu_open").click(function(){
    $(".header .menu").addClass("active");
  });

  $(".layer_open").click(function(){
    var windowTop = $(window).scrollTop();

    $(this).closest("article").addClass("active")
    $(".layerpop").css("top",windowTop+100);
    
    $(".layer_close").click(function(){
      $(this).closest("article").removeClass("active");
    });

  });
});

