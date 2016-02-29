$(document).ready(function() {
    ga('send', 'event', 'bmw3series_XIan', 'ad_unit_load');

    $('input').bind('click', function() {
        $(this).focus();
    });

    var imgArray = [];
    var imageLoadCounter = 0;

    function notifyLoad() {
        $("#initScreen").css("display", "block");
        $("#loader").css("display", "none");
        ga('send', 'event', 'bmw3series_XIan', 'images_loading_complete');
    }

    function loadImages() {
        var img = new Image();
        img.src = 'images/bg.jpg';
        img.onLoad = notifyLoad();
    }

    // $("#exitLink").click(function() {
    //     ga('send', 'event', 'bmw3series_XIan', 'exit_link_tap');
    //     window.open("http://www.volvocars.com/zh-cn/cars/new-models/xc60", "_blank")
    // });

    loadImages();

    $("#submit").bind("click", function() {
        ga('send', 'event', 'bmw3series_XIan', 'user_form_submit_tap');
        var appellation = $("#appellation").val();
        var surname = $("#surname").val();
        var name = $("#name").val();
        var mobile = $("#mobile").val();
        var province = $("#province").val();
        var city = $("#city").val();
        var dealer = $("#dealer").val();

        var submitFlag = true;
        var flag = false;

        if (!submitFlag) return;

        submitFlag = false;

        var tempName = "";
        if ($("#name").val().length == 0 || $("#name").val().length > 21) {
            flag = true;
            $("#name").addClass("error");
            return;
        } else {
            $("#name").removeClass("error");
        }


        if ($("#mobile").val().length == 0) {
            flag = true;
            $("#mobile").addClass("error");
            return;
        } else {
            $("#mobile").removeClass("error");
        }

        tempName = "carmodel";
        if ($("#" + tempName).val().length == 0 || $("#" + tempName).val().length == -1) {
            flag = true;
            $("#" + tempName).addClass("error");
            return;
        } else {
            $("#" + tempName).removeClass("error");
        }

        tempName = "dealer";
        if ($("#" + tempName).val().length == 0 || $("#" + tempName).val().length == -1) {
            flag = true;
            $("#" + tempName).addClass("error");
            return;
        } else {
            $("#" + tempName).removeClass("error");
        }


        console.log(flag);

        if (flag != true) {
            var data = "&name=" + name + '&mobile=' + mobile + '&carmodel=' + carmodel + '&dealer=' + dealer;
            console.log(data);
            $.ajax({
                type: "POST",
                url: "http://rm.inmobi.com/raven/submitdata.php?ravenEntity=bmw3series",
                data: data,
                complete: function() {},
                // beforeSend:function(){
                //   $("#thankyou").css("display", "block");
                //   $("#thankyou").css("zIndex", 1);
                //   $("#tyoverlay").css("zIndex", 1);
                //   $("#thankyoutext").css("zIndex", 1);
                // },
                success: function(data) {
                    $("#thankyou").css("display", "block");
                    $("#thankyou").css("zIndex", 1);
                    $("#tyoverlay").css("zIndex", 1);
                    $("#thankyoutext").css("zIndex", 1);
                    ga('send', 'event', 'bmw3series_XIan', 'form_submit_success');
                }
            });
        }
    });


    $("#tyoverlay,#tyclosebutton,#tytext").click(function() {
        $("#name").val("");
        $("#mobile").val("");
        $("#carmodel").val("");
        $("#dealer").val("");
        ga('send', 'event', 'bmw3series_XIan', 'thankyou_page_close');
        $("#thankyou").css("display", "none");
        $("#thankyou").css("zIndex", -1);
        $("#tyoverlay").css("zIndex", -1);
        $("#thankyoutext").css("zIndex", -1);
    });

    $("#videohp").click(function(){
        ga('send', 'event', 'bmw3series_XIan', 'video_thumbnail_tap');
        $("#videos").css("display", "block");
        $("#videos").css("zIndex", 1);
        $("#overlay").css("zIndex", 1);
        $("#onevideo").css("zIndex", 1);
        $("#onevideo").attr("src", "https://studio.inmobicdn.net/asset/a436af63-3d20-4380-badc-da0033e2dd59.mp4");
        $("#onevideo")[0].play();
    });

    $("#overlay,#closebutton").click(function() {
        ga('send', 'event', 'bmw3series_XIan', 'video_close_tap');
        console.log("Clicked overlay");
        $("#onevideo")[0].pause();
        $("#videos").css("zIndex", -1);
        $("#overlay").css("zIndex", -1);
        $("#onevideo").css("zIndex", -1);
        $("#videos").css("display", "none");
    });

        var swiper3 = new Swiper('.carCarousel', {
        mode: 'horizontal',
        width: 286,
        initialSlide: 0,
        pagination : '.swiper-pagination',
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        onSlideChangeEnd: function(swiper3) {
            slideStas = parseInt(swiper3.activeIndex);

            if (slideStas == 0 || slideStas == 4) {
                sliderName3 = "premiumbaubles-7pk";
                ga('send', 'event', 'slider', sliderName3 + '_show');
            }else if (slideStas == 1 || slideStas == 5 ) {
                sliderName3 = "newport-christmas-tree";
                ga('send', 'event', 'slider', sliderName3 + '_show');
            }else if (slideStas == 2) {
                sliderName3 = "led-solar-rope-light-6m";
                ga('send', 'event', 'slider', sliderName3 + '_show');
            }else if (slideStas == 3 ) {
                sliderName3 = "ledsolar-curtain-lights-150pk-1";
                ga('send', 'event', 'slider', sliderName3 + '_show');
            }
            console.log(sliderName3);
            sliderActiveSub = sliderName3;
        }
    });

});