//= require jquery
//= require jquery_ujs

$(window).load(function() {

    var margin = ($(".doc").width() - 1200)/2;
    $("#page_banner").css({
        "margin-left" : margin.toString() + "px"
    });

    $("#old_town").mouseover(function() {
        $("#old_town_desc").stop();
       $("#old_town_desc").animate({
           "top" : "-70px",
           "opacity" : "1"
       }, 500);
    });
    $("#old_town").mouseout(function() {
        $("#old_town_desc").stop();
        $("#old_town_desc").animate({
            "top" : "-40px",
            "opacity" : "0"
        }, 500);
    });

    $("#parks").mouseover(function() {
        $("#parks_desc").stop();
        $("#parks_desc").animate({
            "top" : "-70px",
            "opacity" : "1"
        }, 500);
    });
    $("#parks").mouseout(function() {
        $("#parks_desc").stop();
        $("#parks_desc").animate({
            "top" : "-40px",
            "opacity" : "0"
        }, 500);
    });

    $("#new_smelter").mouseover(function() {
        $("#new_smelter_desc").stop();
        $("#new_smelter_desc").animate({
            "top" : "-70px",
            "opacity" : "1"
        }, 500);
    });
    $("#new_smelter").mouseout(function() {
        $("#new_smelter_desc").stop();
        $("#new_smelter_desc").animate({
            "top" : "-40px",
            "opacity" : "0"
        }, 500);
    });

    $("#offices").mouseover(function() {
        $("#offices_desc").stop();
        $("#offices_desc").animate({
            "top" : "-70px",
            "opacity" : "1"
        }, 500);
    });
    $("#offices").mouseout(function() {
        $("#offices_desc").stop();
        $("#offices_desc").animate({
            "top" : "-40px",
            "opacity" : "0"
        }, 500);
    });

    $("#modern_architecture").mouseover(function() {
        $("#modern_architecture_desc").stop();
        $("#modern_architecture_desc").animate({
            "top" : "-70px",
            "opacity" : "1"
        }, 500);
    });
    $("#modern_architecture").mouseout(function() {
        $("#modern_architecture_desc").stop();
        $("#modern_architecture_desc").animate({
            "top" : "-40px",
            "opacity" : "0"
        }, 500);
    });

    $("#beside_krakow").mouseover(function() {
        $("#beside_krakow_desc").stop();
        $("#beside_krakow_desc").animate({
            "top" : "-70px",
            "opacity" : "1"
        }, 500);
    });
    $("#beside_krakow").mouseout(function() {
        $("#beside_krakow_desc").stop();
        $("#beside_krakow_desc").animate({
            "top" : "-40px",
            "opacity" : "0"
        }, 500);
    });

});