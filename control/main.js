$(".reni-btn").click(function(){
    $(".reni-albums").addClass("reveal");
    $(".reni-albums").removeAttr("style");
    $(".reni-vinyls").addClass("reveal");
    $(".reni-vinyls").removeAttr("style");
    $(".reni-controls").addClass("reveal");
    $(".reni-controls").removeAttr("style");
    $('.rep-albums').hide();
    $('.rep-vinyls').hide();
    $('.rep-controls').hide();
    $('.mbf-albums').hide();
    $('.mbf-vinyls').hide();
    $('.mbf-controls').hide();
    $('.folk-albums').hide(); 
    $('.folk-vinyls').hide();
    $('.folk-controls').hide();
    $('.bday-albums').hide(); 
    $('.bday-vinyls').hide();
    $('.bday-controls').hide();
    $('.sunshine-albums').hide(); 
    $('.sunshine-vinyls').hide();
    $('.sunshine-controls').hide();
    $('.intro').hide();

$(".reni-play").click(function(){
  $(".record").addClass("spin");
});

$(".reni-stop").click(function(){
  $(".record").removeClass("spin");
});

$(document).ready(function() {
        $('.reni-play').on('click', function() {
            var audio = $('#reni-audio')[0]; 

            audio.play(); 
        });
    });

$(document).ready(function() {
        $('.reni-stop').on('click', function() {
            var audio = $('#reni-audio')[0]; 

            audio.pause();
            audio.currentTime = 0; 
        });
    });


});
$(".rep-btn").click(function(){
    $(".rep-albums").addClass("reveal");
    $(".rep-albums").removeAttr("style");
    $(".rep-vinyls").addClass("reveal");
    $(".rep-vinyls").removeAttr("style");
    $(".rep-controls").addClass("reveal");
    $(".rep-controls").removeAttr("style");
    $('.reni-albums').hide();
    $('.reni-vinyls').hide();
    $('.reni-controls').hide();
    $('.mbf-albums').hide();
    $('.mbf-vinyls').hide();
    $('.mbf-controls').hide();
    $('.folk-albums').hide(); 
    $('.folk-vinyls').hide();
    $('.folk-controls').hide();
    $('.bday-albums').hide(); 
    $('.bday-vinyls').hide();
    $('.bday-controls').hide();
    $('.sunshine-albums').hide(); 
    $('.sunshine-vinyls').hide();
    $('.sunshine-controls').hide();
    $('.intro').hide();

    $(".rep-play").click(function(){
    $(".record").addClass("spin");
    });

    $(".rep-stop").click(function(){
    $(".record").removeClass("spin");
    });

    $(document).ready(function() {
        $('.rep-play').on('click', function() {
            var audio = $('#rep-audio')[0]; 

            audio.play(); 
        });
    });

$(document).ready(function() {
        $('.rep-stop').on('click', function() {
            var audio = $('#rep-audio')[0]; 

            audio.pause();
            audio.currentTime = 0; 
        });
    });

});
$(".mbf-btn").click(function(){
    $(".mbf-albums").addClass("reveal");
    $(".mbf-albums").removeAttr("style");
    $(".mbf-vinyls").addClass("reveal");
    $(".mbf-vinyls").removeAttr("style");
    $(".mbf-controls").addClass("reveal");
    $(".mbf-controls").removeAttr("style");
    $('.reni-albums').hide();
    $('.reni-vinyls').hide();
    $('.reni-controls').hide();
    $('.rep-albums').hide();
    $('.rep-vinyls').hide();
    $('.rep-controls').hide();
    $('.folk-albums').hide(); 
    $('.folk-vinyls').hide();
    $('.folk-controls').hide();
    $('.bday-albums').hide(); 
    $('.bday-vinyls').hide();
    $('.bday-controls').hide();
    $('.sunshine-albums').hide(); 
    $('.sunshine-vinyls').hide();
    $('.sunshine-controls').hide();
    $('.intro').hide();

    $(".mbf-play").click(function(){
    $(".record").addClass("spin");
    });

    $(".mbf-stop").click(function(){
    $(".record").removeClass("spin");
    });

    $(document).ready(function() {
        $('.mbf-play').on('click', function() {
            var audio = $('#mbf-audio')[0]; 

            audio.play(); 
        });
    });

$(document).ready(function() {
        $('.mbf-stop').on('click', function() {
            var audio = $('#mbf-audio')[0]; 

            audio.pause();
            audio.currentTime = 0; 
        });
    });

});
$(".folk-btn").click(function(){
    $(".folk-albums").addClass("reveal");
    $(".folk-albums").removeAttr("style");
    $(".folk-vinyls").addClass("reveal");
    $(".folk-vinyls").removeAttr("style");
    $(".folk-controls").addClass("reveal");
    $(".folk-controls").removeAttr("style");
    $('.reni-albums').hide();
    $('.reni-vinyls').hide();
    $('.reni-controls').hide();
    $('.mbf-albums').hide();
    $('.mbf-vinyls').hide();
    $('.mbf-controls').hide();
    $('.rep-albums').hide(); 
    $('.rep-vinyls').hide();
    $('.rep-controls').hide();
    $('.bday-albums').hide(); 
    $('.bday-vinyls').hide();
    $('.bday-controls').hide();
    $('.sunshine-albums').hide(); 
    $('.sunshine-vinyls').hide();
    $('.sunshine-controls').hide();
    $('.intro').hide();

     $(".folk-play").click(function(){
    $(".record").addClass("spin");
    });

    $(".folk-stop").click(function(){
    $(".record").removeClass("spin");
    });

    $(document).ready(function() {
        $('.folk-play').on('click', function() {
            var audio = $('#folk-audio')[0]; 

            audio.play(); 
        });
    });

$(document).ready(function() {
        $('.folk-stop').on('click', function() {
            var audio = $('#folk-audio')[0]; 

            audio.pause();
            audio.currentTime = 0; 
        });
    });

});
$(".bday-btn").click(function(){
    $(".bday-albums").addClass("reveal");
    $(".bday-albums").removeAttr("style");
    $(".bday-vinyls").addClass("reveal");
    $(".bday-vinyls").removeAttr("style");
    $(".bday-controls").addClass("reveal");
    $(".bday-controls").removeAttr("style");
    $('.reni-albums').hide();
    $('.reni-vinyls').hide();
    $('.reni-controls').hide();
    $('.mbf-albums').hide();
    $('.mbf-vinyls').hide();
    $('.mbf-controls').hide();
    $('.folk-albums').hide(); 
    $('.folk-vinyls').hide();
    $('.folk-controls').hide();
    $('.rep-albums').hide(); 
    $('.rep-vinyls').hide();
    $('.rep-controls').hide();
    $('.sunshine-albums').hide(); 
    $('.sunshine-vinyls').hide();
    $('.sunshine-controls').hide();
    $('.intro').hide();

     $(".bday-play").click(function(){
    $(".record").addClass("spin");
    });

    $(".bday-stop").click(function(){
    $(".record").removeClass("spin");
    });

    $(document).ready(function() {
        $('.bday-play').on('click', function() {
            var audio = $('#bday-audio')[0]; 

            audio.play(); 
        });
    });

$(document).ready(function() {
        $('.bday-stop').on('click', function() {
            var audio = $('#bday-audio')[0]; 

            audio.pause();
            audio.currentTime = 0; 
        });
    });

});
$(".sunshine-btn").click(function(){
    $(".sunshine-albums").addClass("reveal");
    $(".sunshine-albums").removeAttr("style");
    $(".sunshine-vinyls").addClass("reveal");
    $(".sunshine-vinyls").removeAttr("style");
    $(".sunshine-controls").addClass("reveal");
    $(".sunshine-controls").removeAttr("style");
    $('.reni-albums').hide();
    $('.reni-vinyls').hide();
    $('.reni-controls').hide();
    $('.mbf-albums').hide();
    $('.mbf-vinyls').hide();
    $('.mbf-controls').hide();
    $('.folk-albums').hide(); 
    $('.folk-vinyls').hide();
    $('.folk-controls').hide();
    $('.bday-albums').hide(); 
    $('.bday-vinyls').hide();
    $('.bday-controls').hide();
    $('.rep-albums').hide(); 
    $('.rep-vinyls').hide();
    $('.rep-controls').hide();
    $('.intro').hide();

     $(".sunshine-play").click(function(){
    $(".record").addClass("spin");
    });

    $(".sunshine-stop").click(function(){
    $(".record").removeClass("spin");
    });

    $(document).ready(function() {
        $('.sunshine-play').on('click', function() {
            var audio = $('#sunshine-audio')[0]; 

            audio.play(); 
        });
    });

$(document).ready(function() {
        $('.sunshine-stop').on('click', function() {
            var audio = $('#sunshine-audio')[0]; 

            audio.pause();
            audio.currentTime = 0; 
        });
    });

});


$(".draggable").draggable({snap: ".snap"});