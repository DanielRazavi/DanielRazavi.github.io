$(function() {
    $('head').append('<link rel="stylesheet" href="newstyle.css" type="text/css" />');

    $("#mainbox").addClass("main box");
    $("#navbar").addClass("box navbar");

    $("#mainbox").on("click", function(){
        $(this).css({
            'color': '#999999',
            'background-color': 'rgba(255,255,255,0.5)',
            'box-shadow': '0 5px 35px 0px rgba(0,0,0,0.5)'
        });

    });

})