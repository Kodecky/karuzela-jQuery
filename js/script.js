$(function() {
    var carouselList = $('#carousel ul');
    
    setInterval(changeSlide, 3000);
    
    function changeSlide() {
        carouselList.animate({'marginLeft': -400}, 500, moveFirstSlide);
        //console.log('Działa');
    }
    
    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
        
        lastItem.after(firstItem);
        
        carouselList.css({marginLeft: 0});
    }
    /*function changeSlideBack() {
        carouselList.animate({marginLeft: 0}, 500, backSlide);
        //console.log('Działa');
    }
    
    function backSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');
     
        lastItem.after(firstItem);
       
        carouselList.css({marginLeft: -400});
    }
    
    var prevButton = $('#previous'),
        nextButton = $('#next');
    
    prevButton.on('click', function() {
        changeSlideBack();
        
        //console.log('działa');
    });
    
    nextButton.on('click', function() {
        changeSlide();
        
        //console.log('działa');
    }); */
});