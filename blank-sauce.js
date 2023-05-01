$(function() {
    $('head').append('<link rel="stylesheet" href="'+ $('script:last').attr('setStyle') +'" type="text/css"/>');
    console.log("made it here.");
    $(".mainbox").addClass("box").css({
            'margin': '15% auto',
	        'text-align': 'center',
        });

    $(".hint").addClass("hint");
    function timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    setInterval(async function() {
        $(".mainbox > .hint:first").animate({opacity: "0.0"}, 700, "linear");
        await timeout(700);
        $(".mainbox > .hint:first").html("Hover...");
        $(".mainbox > .hint:first").animate({opacity: "1.0"}, 1000, "linear");
        await timeout(3400);
        $(".mainbox > .hint:first").animate({opacity: "0.0"}, 700, "linear");
        await timeout(700);
        $(".mainbox > .hint:first").html("Projects.");
        $(".mainbox > .hint:first").animate({opacity: "1.0"}, 1000, "linear");
    }, 10000);


    $(".mainbox").hover(function(){
        $(".hint").animate({opacity: "0.0"}, 300, "linear");
        $(this).css({
            "box-shadow": "0 5px 35px 0px rgba(0,0,0,0.5)",
            "color": "#999999",
            "transition": "1s 0.4s linear"
        });
        $(this).find(".button").css({
            'opacity': '1',
            'color': '#999999',
	        'border': '1px solid #999999',
	        'transition': '1s 0.5s linear'
        });
    }, function(){
        $(this).css({
            "box-shadow": "0 5px 35px 0px rgba(255, 255, 255, 0.5)",
            "color": "transparent",
            "transition": "1s 0.5s linear"
        });
        $(this).find(".button").css({
            'opacity': '0',
            'color': 'transparent',
	        'border': '1px solid transparent',
	        'transition': '1s 0.5s linear'
        });
        $(".hint").delay(1600).animate({opacity: "1.0"}, 300, "linear");
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
        window.location.href=$(this).attr('href');
    });

    $(".project").addClass("box");


    // 🚧 CONSTRUCTION HERE 🚧
    $(".project.box").hover(function(){
        $(".hint").animate({opacity: "0.0"}, 300, "linear");
        $(this).css({
            "box-shadow": "0 5px 35px 0px rgba(0,0,0,0.5)",
            "color": "#999999",
            "transition": "1s 0.4s linear"
        });
        $(this).find(".button").css({
            'opacity': '1',
            'color': '#999999',
	        'border': '1px solid #999999',
	        'transition': '1s 0.5s linear'
        });
    }, function(){
        $(this).css({
            "box-shadow": "0 5px 35px 0px rgba(255, 255, 255, 0.5)",
            "color": "transparent",
            "transition": "1s 0.5s linear"
        });
        $(this).find(".button").css({
            'opacity': '0',
            'color': 'transparent',
	        'border': '1px solid transparent',
	        'transition': '1s 0.5s linear'
        });
        $(".hint").delay(1600).animate({opacity: "1.0"}, 300, "linear");
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
});