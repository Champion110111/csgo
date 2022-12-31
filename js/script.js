$(document).ready(function () {
    // case opening
    for (i = 0; i < 4; i++) {
        $(".case-item").clone().appendTo(".case-spin");
    }
    $('.roll-btn').click(function () {
        $('.roll-btn').attr('disabled','disabled').css({
            cursor: 'default'
        });
        $('.window').css({
            right: "0"
        })
        $('.case-item').css({
            background: 'none'
        })
        function selfRandom(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        if(changedWidth <= 400){
            var x = selfRandom(62, 77);
        }else{
            var x = selfRandom(62, 80);
        }
        if(changedWidth <= 410){
            $('.window').animate({
                right: ((x*86)+(x*21-12) - 60)
            }, 10000);
        }else{
            $('.window').animate({
                right: ((x*172)+(x*32-12) - 60)
            }, 10000);
        }
        
        
  

        // win
        function win(){
            var timer2 = "0:10";
            var interval = setInterval(function() {
            var timer = timer2.split(':');
            var minutes = parseInt(timer[0], 10);
            var seconds = parseInt(timer[1], 10);
            --seconds;
            minutes = (seconds < 0) ? --minutes : minutes;
            if (minutes < 0) clearInterval(interval);
            seconds = (seconds < 0) ? 59 : seconds;
            seconds = (seconds < 10) ? '0' + seconds : seconds;
            if(minutes < 0){
                $('.win-box').css({
                    display: 'none'
                });
                $('.roll-btn').removeAttr('disabled').css({
                    cursor: 'pointer'
                });
            }
            $('.timer').html(minutes + ':' + seconds);
            timer2 = minutes + ':' + seconds;
          }, 1000);

            let caseItem = $('.case-item').eq(x).children('.case-item__box');
            $('.win-item__box').children('img').attr('src', caseItem.children('img').attr('src'));
            $('.win-box').css({
                display: 'flex'
            });
            $('.live-item.slick-active::last-child').html('<div class="live-item__box"><img src='+ caseItem.children('img').attr('src') +'></div><span></span>').css({
                background: 'green'
            });
            
            // timer
        }
            setTimeout(win, 10500);
    });
    window.onload=function(){
        $('.live-spin').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 800,
            draggable: false,
            slickSetOption: true,
            pauseOnFocus: false,
            pauseOnHover: false,
            responsive: [
                {
                  breakpoint: 1900,
                  settings: {
                    slidesToShow: 5
                  }
                },
                {
                    breakpoint: 1050,
                    settings: {
                      slidesToShow: 4
                    }
                },
                {
                    breakpoint: 802,
                    settings: {
                      slidesToShow: 6
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                      slidesToShow: 5
                    }
                },
                {
                    breakpoint: 565,
                    settings: {
                      slidesToShow: 4
                    }
                },
                {
                    breakpoint: 450,
                    settings: {
                      slidesToShow: 3,
                      centerMode: true
                    }
                },
                {
                    breakpoint: 430,
                    settings: {
                      slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 380,
                    settings: {
                      slidesToShow: 2,
                    }
                }
              ]
        });
        var width = 1903;
        $(window).resize(function(){
        changedWidth = $(window).width();
        if(width !== changedWidth){
            $('.case-spin').css('left', function () {
                return '-'+ (width - changedWidth) / 2 + 'px';
            });
        }
       });
        var width = 1903;
        changedWidth = $(window).width();
        if(width !== changedWidth){
            $('.case-spin').css('left', function () {
                return '-'+ (width - changedWidth) / 2 + 'px';
            });
        }
        if(changedWidth <= 410){
            $('.case-spin').css('left', function () {
                return '-'+ (width - changedWidth) / 5.5 + 'px';
            });
        }
        
    }
});
