$(document).ready(function(){
    
    $(".andish").hover(function(){

      $(".smart").slideToggle(500);
      $("#smart").slideToggle(500);
      
    });

    $(".cru").hover(function(){

      $(".evacute").slideToggle(500);
      $("#evacute").slideToggle(500);
      
    });

    $(".cro").hover(function(){

      $(".audit").slideToggle(500);
      $("#audit").slideToggle(500);
      
    });

    $(".cri").hover(function(){

      $(".cable").slideToggle(500);
      $("#cable").slideToggle(500);
      
    });

    $(".cra").hover(function(){

      $(".enter").slideToggle(500);
      $("#enter").slideToggle(500);
      
    });

    $(".cre").hover(function(){

      $(".music").slideToggle(500);
      $("#music").slideToggle(500);
      
    });

})

$(function() {
  var header = $(".navbar");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  });
});