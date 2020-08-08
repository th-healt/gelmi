$(window).load(function () {
    var obj = $('.column--secondary');
    var offset = obj.offset();
    var topOffset = offset.top;
    
    function onScroll () {
        var scrollTop = $(window).scrollTop();
        var content = $('.container');
        var contentWidth = content.width();
        var windowWidth = $(window).width()
       
        if (scrollTop >= topOffset) {
            obj.css({
                marginTop: 10,
                right: (windowWidth - contentWidth) / 2,
                top: 0,
                position: 'fixed',
            });
        }
        if (scrollTop < topOffset) {
            obj.css({
                top: 0,
                right: 0,
                position: 'relative',
            });
        }
        if (scrollTop >= 10000) {
            obj.css({
                marginTop: 10,
                right: (windowWidth - contentWidth) / 2,
                bottom: 0,
                position: 'fixed',
            });
        }
    }

    $(window).on('scroll', onScroll)
    $(window).on('resize', onScroll)
})


var imageBlock = document.querySelectorAll(".image-block");

for (var i = 0; i < imageBlock.length; i++) {

    imageBlock[i].addEventListener('click', function (event) {
                var target = event.target;
                var parent = target.parentElement;
                var imageHidden = parent.querySelector('.image-hidden');
                imageHidden.classList.toggle("blur");
            })
        }


        if (navigator.userAgent.indexOf('Mac') > 0) {
            var elemHTML = document.getElementsByTagName('body')[0];
        
            elemHTML.className += " mac-os";
        
            if (navigator.userAgent.indexOf('Safari') > 0) elemHTML.className += " mac-safari";
            if (navigator.userAgent.indexOf('Chrome') > 0) elemHTML.className += " mac-chrome";
        };
