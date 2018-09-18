$(function () {
    $('.slideshow').each(function(){
        var $container      = $(this),
            $slideGrop      = $container.find('.slideshow-slides'),
            $slides         = $slideGrop.find('.slide'),
            $nav            = $slides.find('.slideshow-nav'),
            $indicator      = $container.find('.slideshow-indicator'),
            slideCount      = $slides.length,
            indicatorHTML   = '',
            currentIndex    = 0,
            duration        = 500,
            easing          ='easeInOutExpo',
            interval        = 7500,
            timer; 

        $slides.each(function(i){
            $(this).css({left:100*i+'%'}) 
            indicatorHTML+='<a href="#0">'+(i+1)+'</a>';
        });

        $indicator.html(indicatorHTML)

        function goToSlide(index) {

            $slideGrop.animate({left: -100*index+'%'},duration,easing);
            currentIndex = index;
            updateNav();

            // var nextIndex = (currentIndex + 1)%slideCount;
            // // alert(nextIndex);

            // $slides.eq(currentIndex).fadeOut();
            // $slides.eq(nextIndex).fadeIn();
            
            // currentIndex = nextIndex; 
        }//showNextSlide

        function updateNav() {
            var $navPrev = $nav.find('.prev'),
                $navNext = $nav.find('.next');
            if(currentIndex === 0){
                $navPrev.addClass('disabled');
            }else{
                $navPrev.removeClass('disabled');
            }

            if (currentIndex === slideCount-1) {
                $navNext.addClass('disabled');
            } else {
                $navNext.removeClass('disabled');
            }

            $indicator.find('a').removeClass('active').eq(currentIndex).addClass('active')
        }
        function startTimer() {
            timer = setInterval(function(){
                var nextIndex = (currentIndex+1) % slideCount;
                // alert(nextIndex);
                goToSlide(nextIndex);
            },interval);
        }

        function stopTimer() {
            clearInterval(timer)
        }

        $nav.on('click','a',function(e){
            e.preventDefault();
            if($(this).hasClass('prev')){
                goToSlide(currentIndex-1) 
            }else{
                goToSlide(currentIndex+1)
            }
        });

        $indicator.on('click','a',function(e){
            e.preventDefault();
            if(!$(this).hasClass('active')){
                goToSlide($(this).index())
            }
        });
        $container.on({
            mouseenter : stopTimer,
            mouseleave : startTimer
        })
        goToSlide(currentIndex);
        startTimer();
    });//each
});





