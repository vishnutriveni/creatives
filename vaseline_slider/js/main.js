$(document).ready(function() {
    
    ga('send', 'event', 'vaseline_slider', 'vaseline_slider_creative_init');
    ga('send', 'event', 'vaseline_slider', 'slider_page_1');

    if (screen.height > 480) {
        document.getElementById("initScreen").addEventListener('touchstart', function(e) {
            e.preventDefault();
        });
    }
    var imgArray = [];
    var imageLoadCounter = 0;

    function notifyLoad() {
        imageLoadCounter++;
        if (imageLoadCounter == 7) {
            ga('send', 'event', 'vaseline_slider', 'images_loading_complete');
            $("#initScreen").css("display", "block");
            $("#loader").css("display", "none");
        }
    }

    function loadImages() {
        for (var i = 0; i < 7; i++) {
            imgArray[i] = new Image();
        }

        imgArray[0].src = 'images/1.jpg';
        imgArray[0].onLoad = notifyLoad();
        imgArray[1].src = 'images/2.jpg';
        imgArray[1].onLoad = notifyLoad();
        imgArray[2].src = 'images/3.jpg';
        imgArray[2].onLoad = notifyLoad();
        imgArray[3].src = 'images/4.jpg';
        imgArray[3].onLoad = notifyLoad();
        imgArray[4].src = 'images/5.jpg';
        imgArray[4].onLoad = notifyLoad();
        imgArray[5].src = 'images/wheel.png';
        imgArray[5].onLoad = notifyLoad();
        imgArray[6].src = 'images/wheel1.png';
        imgArray[6].onLoad = notifyLoad();


        $("#first").attr("src", imgArray[0].src);
        $("#second").attr("src", imgArray[1].src);
        $("#third").attr("src", imgArray[2].src);
        $("#fourth").attr("src", imgArray[3].src);
        $("#fifth").attr("src", imgArray[4].src);
        $("#wheel").attr("src", imgArray[5].src);

    }

    Draggable.create("#wheel", {
        type: "rotation",
        throwProps: true,
        liveSnap: true,
        bounds: {
            minRotation: 0,
            maxRotation: -210
        },
        snap: function(endValue) {
            if (endValue < 0 && endValue > -39) {
                $("#first").fadeIn("slow");
                ga('send', 'event', 'vaseline_slider', 'slider_page2');
            }
            if (endValue < -40 && endValue > -81) {
                $("#first").fadeOut("slow");
                $("#second").fadeIn("slow");
                $("#wheel").attr("src", imgArray[5].src);
                ga('send', 'event', 'vaseline_slider', 'slider_page_3');
            }
            if (endValue < -82 && endValue > -140) {
                $("#second").fadeOut("slow");
                $("#third").fadeIn("slow");
                $("#wheel").attr("src", imgArray[6].src);
                ga('send', 'event', 'vaseline_slider', 'slider_page_4');
            }
            if (endValue < -141 && endValue > -211) {
                $("#third").fadeOut("slow");
                setTimeout(function() {
                    $("#exitScreen").css("display", "block");
                    $("#initScreen").css("display", "none");
                    ga('send', 'event', 'vaseline_slider', 'exit_link_page_show');
                }, 5000);
            }
            return endValue;
        }
    });

    $("#exitLink").click(function() {
        window.open("http://www.flipkart.com/vaseline-healthy-white-skin-lightening-visible-fairness-lotion/p/itmdny2z33re5vbc?pid=MSCDVPGEECYDTRZZ&icmpid=reco_pp_same_personalcare_moisturizercream_1&ppid=MSCD93YT6ZUJZUDG", "_blank")
        ga('send', 'event', 'vaseline_slider', 'buy_now_click');
    });

    loadImages();

});