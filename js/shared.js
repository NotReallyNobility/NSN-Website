$(document).ready(function(){
    console.log("Testing, testing, 1 2 1 2")
    $(".grow-100").animate({
        width: '100px'
    })
    $(".fade-In").hide();
    $(".fade-In").fadeIn(750);

    /*future pages will likely use javascript to fill out page templates with variables in an array
     rather than hard coding each individual character page. This will be simpler to format.*/
});