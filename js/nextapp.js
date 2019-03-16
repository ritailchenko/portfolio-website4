window.sr = ScrollReveal();
sr.reveal('.video-wrapper');
sr.reveal('.vertical');
sr.reveal('.horizontal');
sr.reveal('#geo-portraits');
sr.reveal('.profile');


$("button").click(function(){
    $(".main-header").toggle("slow");
});

$.stellar();