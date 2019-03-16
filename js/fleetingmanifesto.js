window.sr = ScrollReveal();
sr.reveal('.video-wrapper');
sr.reveal('.big-img');
sr.reveal('#geo-portraits');
sr.reveal('.card-img-top');
sr.reveal('.card');


$("button").click(function(){
    $(".main-header").toggle("slow");
});

$.stellar();