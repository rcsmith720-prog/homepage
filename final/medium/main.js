$(".start-btn").click(function(){
  $(".curtainL").toggleClass("pullL");
  $(".curtainR").toggleClass("pullR");
});

$(".fan-btn").click(function(){
   $(".fan").toggleClass("move");
});

$(".boa-btn").click(function(){
  $(".boa").toggleClass("remove-left");
});

$(".glove-btn").click(function(){
  $(".gloves").toggleClass("remove-right");
});

$(".dress-btn").click(function(){
  $(".dress").toggleClass("remove-left");
});

$(".tights-btn").click(function(){
  $(".tights").toggleClass("remove-right");
});

$(".corset-btn").click(function(){
  $(".corset").toggleClass("remove-left");
  $(".fan").toggleClass("move-in");
  $(".curtainL").toggleClass("dropL");
  $(".curtainR").toggleClass("dropR");
  $(".refresh-btn").toggleClass("appear");
});

$(".start-btn").click(function(){
    $(".fan-btn").addClass("reveal");
    $(".fan-btn").removeAttr("style");
    $('.start-btn').hide();
});

$(".fan-btn").click(function(){
    $(".boa-btn").addClass("reveal");
    $(".boa-btn").removeAttr("style");
    $('.fan-btn').hide();
});

$(".boa-btn").click(function(){
    $(".glove-again").addClass("reveal");
    $(".glove-again").removeAttr("style");
    $('.boa-btn').hide();
});

$(".glove-again").click(function(){
    $(".glove-btn").addClass("reveal");
    $(".glove-btn").removeAttr("style");
    $('.glove-again').hide();
});

$(".glove-btn").click(function(){
    $(".dress-again1").addClass("reveal");
    $(".dress-again1").removeAttr("style");
    $('.glove-btn').hide();
});

$(".dress-again1").click(function(){
    $(".dress-again2").addClass("reveal");
    $(".dress-again2").removeAttr("style");
    $('.dress-again1').hide();
});

$(".dress-again2").click(function(){
    $(".dress-again3").addClass("reveal");
    $(".dress-again3").removeAttr("style");
    $('.dress-again2').hide();
});

$(".dress-again3").click(function(){
    $(".dress-again4").addClass("reveal");
    $(".dress-again4").removeAttr("style");
    $('.dress-again3').hide();
});

$(".dress-again4").click(function(){
    $(".dress-btn").addClass("reveal");
    $(".dress-btn").removeAttr("style");
    $('.dress-again4').hide();
});

$(".dress-btn").click(function(){
    $(".tights-again1").addClass("reveal");
    $(".tights-again1").removeAttr("style");
    $('.dress-btn').hide();
});

$(".tights-again1").click(function(){
    $(".tights-again2").addClass("reveal");
    $(".tights-again2").removeAttr("style");
    $('.tights-again1').hide();
});

$(".tights-again2").click(function(){
    $(".tights-again3").addClass("reveal");
    $(".tights-again3").removeAttr("style");
    $('.tights-again2').hide();
});

$(".tights-again3").click(function(){
    $(".tights-again4").addClass("reveal");
    $(".tights-again4").removeAttr("style");
    $('.tights-again3').hide();
});

$(".tights-again4").click(function(){
    $(".tights-again5").addClass("reveal");
    $(".tights-again5").removeAttr("style");
    $('.tights-again4').hide();
});

$(".tights-again5").click(function(){
    $(".tights-again6").addClass("reveal");
    $(".tights-again6").removeAttr("style");
    $('.tights-again5').hide();
});

$(".tights-again6").click(function(){
    $(".tights-again7").addClass("reveal");
    $(".tights-again7").removeAttr("style");
    $('.tights-again6').hide();
});

$(".tights-again7").click(function(){
    $(".tights-again8").addClass("reveal");
    $(".tights-again8").removeAttr("style");
    $('.tights-again7').hide();
});

$(".tights-again8").click(function(){
    $(".tights-again9").addClass("reveal");
    $(".tights-again9").removeAttr("style");
    $('.tights-again8').hide();
});

$(".tights-again9").click(function(){
    $(".tights-btn").addClass("reveal");
    $(".tights-btn").removeAttr("style");
    $('.tights-again9').hide();
});

$(".tights-btn").click(function(){
    $(".corset-again1").addClass("reveal");
    $(".corset-again1").removeAttr("style");
    $('.tights-btn').hide();
});

$(".corset-again1").click(function(){
    $(".corset-again2").addClass("reveal");
    $(".corset-again2").removeAttr("style");
    $('.corset-again1').hide();
});

$(".corset-again2").click(function(){
    $(".corset-again3").addClass("reveal");
    $(".corset-again3").removeAttr("style");
    $('.corset-again2').hide();
});

$(".corset-again3").click(function(){
    $(".corset-again4").addClass("reveal");
    $(".corset-again4").removeAttr("style");
    $('.corset-again3').hide();
});

$(".corset-again4").click(function(){
    $(".corset-again5").addClass("reveal");
    $(".corset-again5").removeAttr("style");
    $('.corset-again4').hide();
});

$(".corset-again5").click(function(){
    $(".corset-again6").addClass("reveal");
    $(".corset-again6").removeAttr("style");
    $('.corset-again5').hide();
});

$(".corset-again6").click(function(){
    $(".corset-again7").addClass("reveal");
    $(".corset-again7").removeAttr("style");
    $('.corset-again6').hide();
});

$(".corset-again7").click(function(){
    $(".corset-again8").addClass("reveal");
    $(".corset-again8").removeAttr("style");
    $('.corset-again7').hide();
});

$(".corset-again8").click(function(){
    $(".corset-again9").addClass("reveal");
    $(".corset-again9").removeAttr("style");
    $('.corset-again8').hide();
});

$(".corset-again9").click(function(){
    $(".corset-again10").addClass("reveal");
    $(".corset-again10").removeAttr("style");
    $('.corset-again9').hide();
});

$(".corset-again10").click(function(){
    $(".corset-again11").addClass("reveal");
    $(".corset-again11").removeAttr("style");
    $('.corset-again10').hide();
});

$(".corset-again11").click(function(){
    $(".corset-again12").addClass("reveal");
    $(".corset-again12").removeAttr("style");
    $('.corset-again11').hide();
});

$(".corset-again12").click(function(){
    $(".corset-again13").addClass("reveal");
    $(".corset-again13").removeAttr("style");
    $('.corset-again12').hide();
});

$(".corset-again13").click(function(){
    $(".corset-again14").addClass("reveal");
    $(".corset-again14").removeAttr("style");
    $('.corset-again13').hide();
});

$(".corset-again14").click(function(){
    $(".corset-again15").addClass("reveal");
    $(".corset-again15").removeAttr("style");
    $('.corset-again14').hide();
});

$(".corset-again15").click(function(){
    $(".corset-again16").addClass("reveal");
    $(".corset-again16").removeAttr("style");
    $('.corset-again15').hide();
});

$(".corset-again16").click(function(){
    $(".corset-again17").addClass("reveal");
    $(".corset-again17").removeAttr("style");
    $('.corset-again16').hide();
});

$(".corset-again17").click(function(){
    $(".corset-again18").addClass("reveal");
    $(".corset-again18").removeAttr("style");
    $('.corset-again17').hide();
});

$(".corset-again18").click(function(){
    $(".corset-again19").addClass("reveal");
    $(".corset-again19").removeAttr("style");
    $('.corset-again18').hide();
});

$(".corset-again19").click(function(){
    $(".corset-btn").addClass("reveal");
    $(".corset-btn").removeAttr("style");
    $('.corset-again19').hide();
});

$(".corset-btn").click(function(){
    $(".refresh-btn").addClass("reveal");
    $(".refresh-btn").removeAttr("style");
    $('.corset-btn').hide();
});





