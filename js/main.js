
function offsetMove(i){
  var offset = $(".set"+ i).offset().top;
  $('html, body').animate({scrollTop : offset}, 400); 
}
