$(document).ready(function() {
    $("h1").click(function() {
        $(this).css('color', "#ff0000");
    });
});

$(".about-section").waypoint(function(direction) {
    if(direction=="down") {
        $("nav").addClass('sticky_nav');
    }
    else {
        $("nav").removeClass('sticky_nav');
    }
});  


 /* Animation on Scroll */
$(".js--about-section").waypoint(function(direction) {
    $(".js--about-box").addClass('animate__animated animate__fadeIn');
}, {
    offset:'50%'
}); 

$(".js--services-section").waypoint(function(direction) {
    $(".js--service-box").addClass('animate__animated animate__zoomIn');
}, {
    offset:'50%'
}); 

$(".js--packages-section").waypoint(function(direction) {
    $(".js--enterprise").addClass('animate__animated animate__pulse');
}); 
