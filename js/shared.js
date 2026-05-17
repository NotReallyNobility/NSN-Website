$(document).ready(function(){
    console.log("JS loaded")
    $(".grow-100").animate({
        width: '100px'
    })
    $(".fade-In").hide();
    $(".fade-In").fadeIn(750);

    $(".tachyon").click(function() {
        localStorage.setItem("selectedCharacter", "0");
    })

    $(".malady").click(function() {
        localStorage.setItem("selectedCharacter", "1");
    })

    $(".freakshow").click(function() {
        localStorage.setItem("groupIndex", "0");
    });
});