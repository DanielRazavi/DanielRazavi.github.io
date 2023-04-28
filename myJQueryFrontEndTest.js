$(function() {
    $('head').append('<link rel="stylesheet" href="newstyle.css" type="text/css" />');

    $("#mainbox")
        .addClass("main box")
        .css({
            'color': '#999999',
            'background-color': 'rgba(255,255,255,0.5)',
            'box-shadow': '0 5px 35px 0px rgba(0,0,0,0.5)'
        });
    
    $(".hint").css({
        'color': '#999999',
        'position':'absolute'
    }).hide();
   
    $("#navbar").addClass("box navbar");
   
    $("button").css({
        'width': '50%',
        'padding': '12px 20px',
        'margin': '15px 0',
        'border': '1px solid #999999',
        'border-radius': '8px',
        'background-color':  'transparent',
        'color':  '#999999',
        'cursor': 'pointer',
    });

    $("#mainbox").hover(function(){
        $("#mainbox > :not(.hint)").animate({
            opacity: "1",
        }, 1000, "swing").delay(300);

        $(".hint").fadeOut(1000, "swing").delay(300);

        $("#mainbox").css({
            "box-shadow": "0 5px 35px 0px rgba(0,0,0,0.5)",
            "transition": "1s 0.3s linear"
        })
    }, function(){
        $("#mainbox > :not(.hint)").animate({
            opacity: "0.0"
        }, 750, "swing").delay(300);

        $(".hint").fadeIn(750, "swing").delay(300);
        
        $("#mainbox").css({
            "box-shadow": "0 5px 35px 0px rgba(255, 255, 255, 0.5)",
            "transition": "1s 0.3s linear"
        })
    
    });

    $("#navbar").on("click", function(){
        $("#mainbox").fadeToggle(750, "swing");
    });

})