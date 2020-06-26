$(document).ready(function(){
    $("h1").click(function(){
        alert("This is a header");
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