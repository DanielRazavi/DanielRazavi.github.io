$(function() {
    $('head').append('<link rel="stylesheet" href="newstyle.css" type="text/css" />');

    $("#mainbox").addClass("main box").css({
            'color': '#999999',
            'background-color': 'rgba(255,255,255,0.5)',
            'box-shadow': '0 5px 35px 0px rgba(0,0,0,0.5)'
        });
    
    $(".hint").css({
        'color': '#999999',
        'position':'absolute',
        'font-size':'4vw'
    }).hide();
   
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //  For .hint's animation
    setInterval(async function() {
        $(".hint").animate({opacity: "0.0"}, 700, "linear");
        await timeout(700);
        $(".hint").html("Hover...");
        $(".hint").animate({opacity: "1.0"}, 1000, "linear");
        await timeout(3400);
        $(".hint").animate({opacity: "0.0"}, 700, "linear");
        await timeout(700);
        $(".hint").html("Blank.");
        $(".hint").animate({opacity: "1.0"}, 1000, "linear");
    }, 10000);

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
        $(".hint").fadeOut(300, "linear");
        $("#mainbox").css({
            "box-shadow": "0 5px 35px 0px rgba(0,0,0,0.5)",
            "transition": "1s 0.4s linear"
        })
        $("#mainbox > :not(.hint)").delay(400).animate({
            opacity: "1",
        }, 1000, "linear");
    }, function(){
        $("#mainbox").css({
            "box-shadow": "0 5px 35px 0px rgba(255, 255, 255, 0.5)",
            "transition": "1s 0.5s linear"
        });
        $("#mainbox > :not(.hint)").delay(500).animate({
            opacity: "0.0"
        }, 1000, "linear");
        $(".hint").delay(1600).fadeIn(300, "linear");
    });

    $("#navbar").hover(function(){
        $(this).css({
            'width': '400px',
            'background-color': '#ffffff',
		    'box-shadow': '0 5px 35px 0px rgba(0,0,0,0.5)',
            "transition": "1s 0.4s"
        });
        $("#navbar > a").css({
            'color': '#999999',
            'display': 'table-cell',
            'text-align': 'center',
            "transition": "1s 0.6s"
        });
    }, function(){
        $("#navbar > a").css({
            'color': 'transparent',
            'display': 'table-cell',
            'text-align': 'center',
            "transition": "0.5s 0.2s"
        });
        
        $(this).css({
            'width': '100px',
            'background-color': 'transparent',
		    'box-shadow': '0 5px 35px 0px rgba(255, 255, 255, 0.5)',
            "transition": "1s 0.6s"
        });
        
    });
})