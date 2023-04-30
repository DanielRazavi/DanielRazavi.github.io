$(function() {
    $('head').append('<link rel="stylesheet" href="style.css" type="text/css" />');

    $("#mainbox").addClass("box").css({
            'margin': '15% auto',
	        'text-align': 'center',
        });

    $(".hint").addClass("hint");
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
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
    $("#mainbox").hover(function(){
        $(".hint").fadeOut(300, "linear");
        $("#mainbox").css({
            "box-shadow": "0 5px 35px 0px rgba(0,0,0,0.5)",
            "color": "#999999",
            "transition": "1s 0.4s linear"
        })
        $(".button").css({
            'opacity': '1',
            'color': '#999999',
	        'border': '1px solid #999999',
	        'transition': '1s 0.5s linear'
        });
    }, function(){
        $("#mainbox").css({
            "box-shadow": "0 5px 35px 0px rgba(255, 255, 255, 0.5)",
            "color": "transparent",
            "transition": "1s 0.5s linear"
        });
        $(".button").css({
            'opacity': '0',
            'color': 'transparent',
	        'border': '1px solid transparent',
	        'transition': '1s 0.5s linear'
        });
        $(".hint").delay(1600).fadeIn(300, "linear");
    });

    $("button").addClass("button");
    $("button").hover(function(){
        $(this).css({
            'color': '#ffffff',
            'background-color': '#999999',
            'border': '1px solid #999999',
            'transition': '0.5s linear'
        });
    }, function(){
        $(this).css({
            'color': '#999999',
            'background-color': 'transparent',
            'border': '1px solid  #999999',
            'transition': '1s linear'
        });
    });
    $("button").on("click", function(){
        window.location.href='mailto:danraz1376@gmail.com';
    });

    $("#navbar").addClass("box navbar");
    $("#navbar > a").css({
        'color': 'transparent',
        'display': 'table-cell',
        'text-align': 'center',
    });
    $("#navbar").hover(function(){
        $(this).css({
            'width': '400px',
            'background-color': '#ffffff',
		    'box-shadow': '0 5px 35px 0px rgba(0,0,0,0.5)',
            "transition": "1s 0s"
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