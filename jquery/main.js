$(".dark-btn").click(function(){
  $(".box").toggleClass("dark");
  $("body").toggleClass("dark");
});

$(".spin-btn").click(function(){
  $(".box").toggleClass("spin");
});

$(".reveal-btn").click(function(){
//   $(".chair").addClass("reveal");
// $(".chair").css("display","block");
$(".chair").show();
$(".reveal-btn").hide();
});

$( ".draggable" ).draggable();

