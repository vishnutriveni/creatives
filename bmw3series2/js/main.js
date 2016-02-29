$(document).ready(function() {
    var userTicked = true;

    ga('send', 'event', 'bmw3series_Sichuan', 'ad_unit_load');

    $('input').bind('click', function() {
        $(this).focus();
    });

    var imgArray = [];
    var imageLoadCounter = 0;

    function notifyLoad() {
        $("#initScreen").css("display", "block");
        $("#loader").css("display", "none");
        ga('send', 'event', 'bmw3series_Sichuan', 'images_loading_complete');
    }

    function loadImages() {
        var img = new Image();
        img.src = 'images/bg.jpg';
        img.onLoad = notifyLoad();
    }

    // $("#exitLink").click(function() {
    //     ga('send', 'event', 'bmw3series_Sichuan', 'exit_link_tap');
    //     window.open("http://www.volvocars.com/zh-cn/cars/new-models/xc60", "_blank")
    // });

    loadImages();

    $("#submit").bind("click", function() {
        ga('send', 'event', 'bmw3series_Sichuan', 'user_form_submit_tap');
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

        tempName = "appellation";
        if ($("#" + tempName).val().length == 0) {
            flag = true;
            $("#" + tempName).addClass("error");
            return;
        } else {
            $("#" + tempName).removeClass("error");
        }

        tempName = "surname";
        if ($("#" + tempName).val().length == 0) {
            flag = true;
            $("#" + tempName).addClass("error");
            return;
        } else {
            $("#" + tempName).removeClass("error");
        }

        tempName = "name";
        if ($("#" + tempName).val().length == 0) {
            flag = true;
            $("#" + tempName).addClass("error");
            return;
        } else {
            $("#" + tempName).removeClass("error");
        }

        tempName = "mobile";
        if ($("#" + tempName).val().length == 0) {
            flag = true;
            $("#" + tempName).addClass("error");
            return;
        } else {
            $("#" + tempName).removeClass("error");
        }

        if(!userTicked){
            flag = true;
            $("#tick").addClass("error");
            return;
        }

        console.log(flag);

        if (flag != true) {
            var data = "appellation=" + appellation + '&surname=' + surname + '&name=' + name + '&mobile=' + mobile + '&province=' + province + '&city=' + city + '&dealer=' + dealer;
            console.log(data);
            $.ajax({
                type: "POST",
                url: "http://rm.inmobi.com/raven/submitdata.php?ravenEntity=bmw3series_Sichuan",
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
                    ga('send', 'event', 'bmw3series_Sichuan', 'form_submit_success');
                }
            });
        }
    });


    $("#tyoverlay,#tyclosebutton,#tytext").click(function() {
        $("#name").val("");
        $("#mobile").val("");
        $("#carmodel").val("");
        $("#dealer").val("");
        ga('send', 'event', 'bmw3series_Sichuan', 'thankyou_page_close');
        $("#thankyou").css("display", "none");
        $("#thankyou").css("zIndex", -1);
        $("#tyoverlay").css("zIndex", -1);
        $("#thankyoutext").css("zIndex", -1);
    });

    $("#videohp").click(function(){
        ga('send', 'event', 'bmw3series_Sichuan', 'video_thumbnail_tap');
        $("#videos").css("display", "block");
        $("#videos").css("zIndex", 1);
        $("#overlay").css("zIndex", 1);
        $("#onevideo").css("zIndex", 1);
        $("#onevideo").attr("src", "https://studio.inmobicdn.net/asset/a436af63-3d20-4380-badc-da0033e2dd59.mp4");
        $("#onevideo")[0].play();
    });

    $("#overlay,#closebutton").click(function() {
        ga('send', 'event', 'bmw3series_Sichuan', 'video_close_tap');
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

            if (slideStas == 0 || slideStas == 5) {
                sliderName3 = "frame_5";
                ga('send', 'event', 'bmw3series_Sichuan', sliderName3 + '_show');
            }else if (slideStas == 1 || slideStas == 6 ) {
                sliderName3 = "frame_1";
                ga('send', 'event', 'bmw3series_Sichuan', sliderName3 + '_show');
            }else if (slideStas == 2) {
                sliderName3 = "frame_2";
                ga('send', 'event', 'bmw3series_Sichuan', sliderName3 + '_show');
            }else if (slideStas == 3 ) {
                sliderName3 = "frame_3";
                ga('send', 'event', 'bmw3series_Sichuan', sliderName3 + '_show');
            }else if (slideStas == 4 ) {
                sliderName3 = "frame_4";
                ga('send', 'event', 'bmw3series_Sichuan', sliderName3 + '_show');
            }
        }
    });

    $("#tick").click(function(){
        if(userTicked){
            ga('send', 'event', 'bmw3series_Sichuan', 'agree_untick');
            $("#emptyBox").show();
            $("#tickBox").hide();
            userTicked = false;
        }else{
            $("#emptyBox").hide();
            $("#tickBox").show();
            userTicked = true;
            ga('send', 'event', 'bmw3series_Sichuan', 'agree_tick');
        }
    });

});