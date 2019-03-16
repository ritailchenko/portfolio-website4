$("button").click(function(){
    $(".main-header").toggle("slow");
});

window.sr = ScrollReveal();
sr.reveal('#geo-portraits');
sr.reveal('.one');
sr.reveal('.second');
sr.reveal('.third');

$.stellar();
