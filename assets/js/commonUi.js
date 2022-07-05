function uiAccordion(){
    var $accordion = $('.js-ui-accordion-list');
    var $item = $('.ui-accordion-item');
    var $opener = $('.ui-accordion-opener');
    $accordion.each(function(){
        $opener.on('click', function(){
            var _ = $(this);
            var $contents = _.parent('.ui-accordion-header').next('.ui-accordion-body');
            var $header = _.parent($accordion).find($item);
            console.log($header);
            $contents.css('display')=='block' 
            ? (
                $contents.slideUp(),
                _.parent().parent('.ui-accordion-item').removeClass('is-active')
            ) : (
                $contents.slideDown(),
                _.parent().parent('.ui-accordion-item').addClass('is-active')
            )
        })
    })
}
uiAccordion();

function copyEmail(copyText){
    var tempElem = document.createElement('textarea');
    tempElem.value = copyText;
    document.body.appendChild(tempElem);

    tempElem.select();
    document.execCommand('copy');
    document.body.removeChild(tempElem);

    alert(`이메일 주소가 복사되었습니다.`);
};

function acceptModal(){
    var wTop = $(window).scrollTop();
    if($('#modal').css('display')=='none') {
        $('#modal').show();
        $('html, body').scrollTop(wTop);
        $('html').addClass('js-scroll-blocking');
    } else {
        $('#modal').hide();
        $('html').removeClass('js-scroll-blocking').scrollTop(wTop);
    }
}
$('#wrap').addClass('is-active');
$('.subject-content .btn-primary-arrow').on('click', function(){
    var _ = $(this);
    var layer = _.parent('.btn-group').next('.terms-layer');
    if(layer.css('display')=='none') {
        _.addClass('is-active');
        layer.slideDown();
    } else {
        _.removeClass('is-active');
        layer.slideUp();
    }
})
function gnbClick(){
    var headerHeight = $('#header').outerHeight();
    $('.global-menu li.menu-00 button').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('#cardGallery').offset().top - headerHeight }, 500);
    })
    $('.global-menu li.menu-01 button').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('#cardSection02').offset().top - headerHeight }, 500);
    })
    $('.global-menu li.menu-02 button').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('#cardSection0202').offset().top - headerHeight }, 500);
    })
    $('.global-menu li.menu-03 button').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('#cardSection04').offset().top - headerHeight }, 500);
    })
}
gnbClick();
function gnbScroll(){
    var headerHeight = $('#header').outerHeight();
    var gallerySection = $('#cardGallery').length && $('#cardGallery').offset().top - headerHeight;
    var section1 = $('#cardSection01').length && $('#cardSection01').offset().top - headerHeight;
    var section2 = $('#cardSection02').length && $('#cardSection02').offset().top - headerHeight;
    var section22 = $('#cardSection0202').length && $('#cardSection0202').offset().top - headerHeight;
    var section3 = $('#cardSection03').length && $('#cardSection03').offset().top - headerHeight;
    var section4 = $('#cardSection04').length && $('#cardSection04').offset().top - headerHeight;
    var windowTop = $(window).scrollTop()+headerHeight;
    if(windowTop >= 0) {
        $('.global-menu li button').removeClass('is-active');
    }
    if(windowTop >= gallerySection) {
        $('.global-menu li button').removeClass('is-active');
        $('.global-menu li.menu-00 button').addClass('is-active');
    }
    if(windowTop >= section2) {
        $('.global-menu li button').removeClass('is-active');
        $('.global-menu li.menu-01 button').addClass('is-active');
    }
    if(windowTop >= section22) {
        $('.global-menu li button').removeClass('is-active');
        $('.global-menu li.menu-02 button').addClass('is-active');
    }
    if(windowTop >= section3) {
        $('#cardSection03').addClass('is-active');
    }
    if(windowTop >= section4) {
        $('.global-menu li button').removeClass('is-active');
        $('.global-menu li.menu-03 button').addClass('is-active');
    }
}
$(window).scroll(function(){
    gnbScroll();
})
function joinSection(){
    var headerHeight = $('#header').outerHeight();
    $('html, body').animate({scrollTop: $('#joinSection').offset().top - headerHeight}, 500)
}
function mobileMenuToggle(){
    var $btnMenu = $('.btn-mobile-menu');
    var $allMenu = $('.global-menu');
    $allMenu.css('display') === 'none'
    ? ($allMenu.show(), $btnMenu.addClass('is-open'))
    : ($allMenu.hide(), $btnMenu.removeClass('is-open'))
}
$('#cardSection01').addClass('is-active');

var $tabButton = $('.tab-list button');
$tabButton.on('click', function(){
    var tabName = $(this).attr('data-tab');
    var $tabParent = $(this).parents('.use-tab');
    $tabButton.removeClass('is-active');
    $(this).addClass('is-active');
    $tabParent.find('.tab-contents').hide();
    $tabParent.find('.tab-contents[data-tab='+tabName+']').show();
})