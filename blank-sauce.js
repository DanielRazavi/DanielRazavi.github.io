// blank sauce is the jQuery script file that is running the javascript logic of the entire front end.

$(function () {
  $("head").append(
    '<link rel="stylesheet" href="' +
      $("script:last").attr("setStyle") +
      '" type="text/css"/>'
  );

  $(".mainbox").addClass("box").css({
    margin: "15% auto",
    "text-align": "center",
  });
  $(".hint").addClass("hint");
  $(".project").addClass("box");
  $("button").addClass("button");
  $("#navbar").addClass("box navbar");

  // Hint Animation
  // function timeout(ms) {
  //     return new Promise(resolve => setTimeout(resolve, ms));
  // }
  // setInterval(async function() {
  //     $(".mainbox > .hint:first").animate({opacity: "0.0"}, 700, "linear");
  //     await timeout(700);
  //     $(".mainbox > .hint:first").html("Hover...");
  //     $(".mainbox > .hint:first").animate({opacity: "1.0"}, 1000, "linear");
  //     await timeout(3400);
  //     $(".mainbox > .hint:first").animate({opacity: "0.0"}, 700, "linear");
  //     await timeout(700);
  //     $(".mainbox > .hint:first").html("Projects.");
  //     $(".mainbox > .hint:first").animate({opacity: "1.0"}, 1000, "linear");
  // }, 10000);

  // Main Box
  $(".mainbox").hover(
    function () {
      $(".hint").animate({ opacity: "0.0" }, 300, "linear");
      $(this).css({
        "box-shadow": "0 5px 35px 0px rgba(0,0,0,0.5)",
        color: "#999999",
        transition: "1s 0.4s linear",
      });
      $(this).find(".button").css({
        opacity: "1",
        color: "#999999",
        border: "1px solid #999999",
        transition: "1s 0.5s linear",
      });
    },
    function () {
      $(this).css({
        "box-shadow": "0 5px 35px 0px rgba(255, 255, 255, 0.5)",
        color: "transparent",
        transition: "1s 0.5s linear",
      });
      $(this).find(".button").css({
        opacity: "0",
        color: "transparent",
        border: "1px solid transparent",
        transition: "1s 0.5s linear",
      });
      $(".hint").delay(1600).animate({ opacity: "1.0" }, 300, "linear");
    }
  );

  // Buttons
  $("button").hover(
    function () {
      $(this).css({
        color: "#ffffff",
        "background-color": "#999999",
        border: "1px solid #999999",
        transition: "0.5s linear",
      });
    },
    function () {
      $(this).css({
        color: "#999999",
        "background-color": "transparent",
        border: "1px solid  #999999",
        transition: "1s linear",
      });
    }
  );
  $("button").on("click", function () {
    window.location.href = $(this).attr("href");
  });

  // Project Box
  $(".project").hover(
    function () {
      $(".hint").animate({ opacity: "0.0" }, 300, "linear");
      $(this).css({
        "box-shadow": "0 5px 35px 0px rgba(0,0,0,0.5)",
        color: "#999999",
        transition: "1s 0.4s linear",
      });
      $(this).find(".button").css({
        opacity: "1",
        color: "#999999",
        border: "1px solid #999999",
        transition: "1s 0.5s linear",
      });
      $(this).find("img").css({
        opacity: "1",
        display: "inline",
        transition: "1s 0.5s linear",
      });
    },
    function () {
      $(this).css({
        "box-shadow": "0 5px 35px 0px rgba(255, 255, 255, 0.5)",
        color: "transparent",
        transition: "1s 0.5s linear",
      });
      $(this).find(".button").css({
        opacity: "0",
        color: "transparent",
        border: "1px solid transparent",
        transition: "1s 0.5s linear",
      });
      $(".hint").delay(1600).animate({ opacity: "1.0" }, 300, "linear");
    }
  );

  // Project Box BETTER DESIGN
  // $(".project").hover(function(){

  //     $(this).find(".hint").animate({opacity: "0.0"}, 300, "linear");

  //     $(this).delay(1000).animate({
  //         right: '20%',
  //     }, "fast", "linear");

  //     $(this).css({
  //         "box-shadow": "0 5px 35px 0px rgba(0,0,0,0.5)",
  //         "color": "#999999",
  //         "transition": "0.5s linear"
  //     });

  //     $(this).find("img").delay(1000).animate({
  //         opacity: "1.0",
  //         left: "110%",
  //         bottom: "20%",
  //     }, 725, "linear");

  // }, function(){

  //     $(this).find("img").delay(1600).animate({
  //         opacity: "0.0",
  //         left: "0%",
  //         bottom: "0%",
  //     }, 500, "linear");

  //     $(this).css({
  //         "box-shadow": "0 5px 35px 0px rgba(255, 255, 255, 0.5)",
  //         "color": "transparent",
  //         "transition": "0.5s linear"
  //     });

  //     $(this).delay(1600).animate({
  //         right: '0%'
  //     }, "fast", "linear");

  //     $(this).find(".hint").delay(1600).animate({opacity: "1.0"}, 300, "linear");

  // });

  // iFrame Container
  $(".iframe-container").css({
    margin: "15% auto 15%",
    "text-align": "center",
  });

  // YouTube Container
  $(".youtube-disclaimer > p , .youtube-disclaimer").css({
    color: "#999999",
    margin: "100px auto 0px",
    "text-align": "center",
  });

  // Navigation Box
  $("#navbar > a").css({
    color: "transparent",
    display: "table-cell",
    "text-align": "center",
  });
  $("#navbar").hover(
    function () {
      $(this).css({
        width: "400px",
        "background-color": "#ffffff",
        "box-shadow": "0 5px 35px 0px rgba(0,0,0,0.5)",
        transition: "1s 0s",
      });
      $("#navbar > a").css({
        color: "#999999",
        display: "table-cell",
        "text-align": "center",
        transition: "1s 0.6s",
      });
    },
    function () {
      $("#navbar > a").css({
        color: "transparent",
        display: "table-cell",
        "text-align": "center",
        transition: "0.5s 0.2s",
      });

      $(this).css({
        width: "100px",
        "background-color": "rgba(255, 255, 255, 0.5)",
        "box-shadow": "0 5px 35px 0px rgba(255, 255, 255, 0.5)",
        transition: "1s 0.6s",
      });
    }
  );
});
