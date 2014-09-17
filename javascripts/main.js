$(document).ready(function () {
  $('#tab1').show()
  // Put your JavaScript behavior here
  $("li").on("click", function(){
    $('.tab').hide();
    $('.active').removeClass('active');
    $(this).addClass('active');
    $($(this).find('a').attr('class')).show();
  });
 
});