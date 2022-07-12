

function fpActive(){
    $('#fullpage').fullpage({
        //이동
        // menu: '#menu',
        // lockAnchors: false,
        // anchors:['firstPage', 'secondPage'],
        // navigation: false,
        // navigationPosition: 'right',
        // navigationTooltips: ['firstSlide', 'secondSlide'],
        // showActiveTooltip: false,
        // slidesNavigation: false,
        // slidesNavPosition: 'bottom',

        // //스크롤
        // css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        // fitToSection: true,
        // fitToSectionDelay: 1000,
        // scrollBar: false,
        // easing: 'easeInOutCubic',
        // easingcss3: 'ease',
        // loopBottom: false,
        // loopTop: false,
        // loopHorizontal: true,
        // continuousVertical: false,
        // continuousHorizontal: false,
        // scrollHorizontally: false,
        // interlockedSlides: false,
        // dragAndMove: false,
        // offsetSections: false,
        // resetSliders: false,
        // fadingEffect: false,
        // normalScrollElements: '#element1, .element2',
        scrollOverflow: true,
        // scrollOverflowReset: false,
        // scrollOverflowOptions: null,
        touchSensitivity: 15,
        // bigSectionsDestination: null,

        // //접근성
        // keyboardScrolling: true,
        // animateAnchor: true,
        // recordHistory: true,

        // //디자인
        // controlArrows: true,
        // verticalCentered: true,
        // sectionsColor : ['#ccc', '#fff'],
        // paddingTop: '3em',
        // paddingBottom: '10px',
        // fixedElements: '#header, .footer',
        // responsiveWidth: 0,
        // responsiveHeight: 0,
        // responsiveSlides: false,
        // parallax: false,
        // parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        // cards: false,
        // cardsOptions: {perspective: 100, fadeContent: true, fadeBackground: true},

        // //맞춤 선택자
        sectionSelector: 'section',
        // slideSelector: '.slide',
        // lazyLoading: true,

        // //사건(이벤트)
        // onLeave: function(origin, destination, direction){},
        // afterLoad: function(origin, destination, direction){},
        // afterRender: function(){},
        // afterResize: function(width, height){},
        // afterReBuild: function(){},
        // afterResponsive: function(isResponsive){},
        // afterSlideLoad: function(section, origin, destination, direction){},
        // onSlideLeave: function(section, origin, destination, direction){}
    });
}
// fpActive(); <- 풀페이지 구현 시 주석 풀 것


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
        $('html, body').stop().animate({scrollTop: $('#cardGallery').offset().top }, 500);
    })
    $('.global-menu li.menu-01 button').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('#cardSection02').offset().top }, 500);
    })
    $('.global-menu li.menu-02 button').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('#cardSection0202').offset().top }, 500);
    })
    $('.global-menu li.menu-03 button').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('#cardSection04').offset().top }, 500);
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


function section01_Swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: '3',
        speed: 800,
        spaceBetween: 43,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints : {
            768 : { //브라우저가 768보다 클 때
              
            },
          
        },
    });
}
section01_Swiper();

fileupload();
function fileupload (){
    var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function(){  // 값이 변경되면
      if(window.FileReader){  // modern browser
        var filename = $(this)[0].files[0].name;
      } 
      else {  // old IE
        var filename = $(this).val().split('/').pop().split('\\').pop();  // 파일명만 추출
      }
      
      // 추출한 파일명 삽입
      $(this).siblings('.upload-name').val(filename);
    });
}

