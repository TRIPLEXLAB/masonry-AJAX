$(function () {
    $('.slideshow').each(function(){
        var $slides = $(this).find('img'),
            slideCount = $slides.length,
            currentIndex = 0;
        
        $slides.eq(currentIndex).fadeIn();
        setInterval(showNextSlide,7500)    

        function showNextSlide() {
            var nextIndex = (currentIndex + 1)%slideCount;
            alert(nextIndex);

            $slides.eq(currentIndex).fadeOut();
            $slides.eq(nextIndex).fadeIn();
            
            currentIndex = nextIndex; 
        }//showNextSlide

        
    });//each




});





