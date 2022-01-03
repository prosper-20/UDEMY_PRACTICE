$(document).ready(function() {
    $("h1").click(function() {
        $(this).css('color', "#ff0000");
    });
});

$(".js--about-section").waypoint(function(direction) {
    if(direction=="down") {
        $("nav").addClass('sticky-nav');
    }
    else {
        $("nav").removeClass('sticky-nav');
    }
}); 