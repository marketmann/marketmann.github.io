(function($) {
    // Countdown
        $(".counter__timer").countdown({
            until: $.countdown.UTCDate(-7, new Date(2020, 6-1, 28, 23, 59, 59))
        });
    // .Countdown
    
    var lastScrollTop = 0;
    $(window).scroll(function(event){
        var widthTotal = $(window).width();
        var st = $(this).scrollTop();

        if (st > lastScrollTop){
            // downscroll code
            if (widthTotal <= 780) {
                console.log("down")
                if (!$(".header").hasClass("header--up")) {
                    $(".header").addClass("header--up");
                }
            }
        } else {
            // upscroll code
            if (widthTotal <= 780) {
                console.log("up")
                if ($(".header").hasClass("header--up")) {
                    $(".header").removeClass("header--up");
                }
            }
        }

        lastScrollTop = st;
    });

    // Menu
        $(".trigger-section").on("click", function() {
            var data_section = $(this).attr("data-section");
            var negative_value = data_section == "why-quizzes" ? 190 : 120;
            // if (data_section == "payments") negative_value = 120;
            
            $('html, body').animate({scrollTop: $("#" + data_section).offset().top - negative_value}, 1000);
        });
    // .Menu
    
    // Play Video
        var $videoPlayer = $(".intro__video");

        $videoPlayer.on("click", function() {
            if (!$(this).hasClass("intro__video--playing") && !$(this).hasClass("intro__video--has-wistia")) {
                // Build the YouTube URL
                    var sourceVideo = $(this).attr("data-video");

                    if (sourceVideo.indexOf('youtube') !== -1) {
                        var videoEmbedId = sourceVideo.split('v=')[1] || '';
                        var ampersandPosition = videoEmbedId !== undefined ? videoEmbedId.indexOf('&') : '';
                        
                        if (ampersandPosition != -1 ) {
                            videoEmbedId = videoEmbedId.substring(0, ampersandPosition)
                        }
                        
                        videoEmbedUrl = 'https://www.youtube.com/embed/' + videoEmbedId + '?autoplay=1';
                        videoEmbedThumbnail = 'http://i3.ytimg.com/vi/' + videoEmbedId + '/maxresdefault.jpg';
                        
                    } else if (url.indexOf('youtu.be') !== -1) {
                        videoEmbedId = url.split('youtu.be/')[1];
                        videoEmbedUrl = 'https://www.youtube.com/embed/' + videoEmbedId + '?autoplay=1';
                        videoEmbedThumbnail = 'http://i3.ytimg.com/vi/' + videoEmbedId + '/maxresdefault.jpg';
                    
                    }

                // Create the iframe
                    var videoEmbedIframe = `
                        <iframe
                            class='intro__iframe'
                            src='${videoEmbedUrl}' 
                            allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
                            frameborder='0'
                            allowfullscreen>
                        </iframe>`;
                    
                    $videoPlayer.addClass("intro__video--playing");
                    $videoPlayer.empty().append(videoEmbedIframe);
            }
        });
    // .Play Video

    // Questions
        $(".questions__item").on("click", function() {
            if ($(this).hasClass("questions__item--active")) {
                $(this).removeClass("questions__item--active");    
            } else {
                $(".questions__item").removeClass("questions__item--active");
                $(this).addClass("questions__item--active");
            }
        });
    // .Questions
})(jQuery);