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