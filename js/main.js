
function offsetMove(i){
  var offset = $(".set"+ i).offset().top;
  $('html, body').animate({scrollTop : offset}, 400); 
}

$(function(){
  $(".mo_menu_open").click(function(){
    $(".header .menu").addClass("active");
  });

  $(".layer_open").click(function(){
    var windowTop = $(window).scrollTop();

    $(this).closest('article').addClass('active')
    $('.layerpop').css("top",windowTop+100);
    
    $(".layer_close").click(function(){
      $(this).closest('article').removeClass("active");
    });

  });
});

