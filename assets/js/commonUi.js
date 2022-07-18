

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
            // console.log($header);
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
$('.btn-primary').on('click', function(){
    $('#modal iframe').hide();
    $('#modal #modalGuide').show();
    $('#modal').fadeIn();
    $('#modal').css('overflow', 'auto');
});

$('.btn-primary2, .btn-join').on('click', function(){
    $('#modal #modalGuide').hide();
    $('#modal iframe').show();
    $('#modal').fadeIn();
    $('#modal').css('overflow', 'hidden');
});

function gnbClick(){
    var headerHeight = $('#header').outerHeight();
    $('.global-menu li.menu-01 button').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('#cardSection02').offset().top + 60 }, 500);
    })
    $('.global-menu li.menu-02 button').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('#cardSection02_2').offset().top }, 500);
    })
    $('.global-menu li.menu-03 button').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('#cardSection03').offset().top - 10 }, 500);
    })
    $('.global-menu li.menu-04 button').on('click', function(){
        $('html, body').stop().animate({scrollTop: $('#cardSection04').offset().top + 50 }, 500);
        
    })
    if ($(window).width() < 768) {
        $('.global-menu li button').on('click', function(){
            $('.global-menu').css('display', 'none');
        });
        $('.global-menu li.menu-01 button').on('click', function(){
            $('html, body').stop().animate({scrollTop: $('#cardSection02').offset().top + 40 }, 500);
            
        });
        $('.global-menu li.menu-03 button').on('click', function(){
            $('html, body').stop().animate({scrollTop: $('#cardSection03').offset().top - 10 }, 500);
            
        });
        $('.global-menu li.menu-04 button').on('click', function(){
            $('html, body').stop().animate({scrollTop: $('#cardSection04').offset().top + 100 }, 500);
            
        });
    }
}
gnbClick();

function gnbScroll(){
    var headerHeight = $('#header').outerHeight();
    // var gallerySection = $('#cardGallery').length && $('#cardGallery').offset().top - headerHeight;
    var section1 = $('#cardSection01').length && $('#cardSection01').offset().top - headerHeight;
    var section2 = $('#cardSection02').length && $('#cardSection02').offset().top - headerHeight;
    var section3 = $('#cardSection02_2').length && $('#cardSection02_2').offset().top - headerHeight;
    var section4 = $('#cardSection03').length && $('#cardSection03').offset().top - headerHeight;
    var section5 = $('#cardSection04').length && $('#cardSection04').offset().top - headerHeight;
    var windowTop = $(window).scrollTop()+headerHeight;
    if(windowTop >= 0) {
        $('.global-menu li button').removeClass('is-active');
    }
    if(windowTop >= section1) {
        $('.global-menu li button').removeClass('is-active');
    }
    if(windowTop >= section2) {
        $('.global-menu li button').removeClass('is-active');
        $('.global-menu li.menu-01 button').addClass('is-active');
    }
    if(windowTop >= section3) {
        $('.global-menu li button').removeClass('is-active');
        $('.global-menu li.menu-02 button').addClass('is-active');
    }
    if(windowTop >= section4) {
        $('.global-menu li button').removeClass('is-active');
        $('.global-menu li.menu-03 button').addClass('is-active');
    }
    if(windowTop >= section5) {
        $('.global-menu li button').removeClass('is-active');
        $('.global-menu li.menu-04 button').addClass('is-active');
    }
}


$(window).scroll(function(){
    gnbScroll();

    const st = $(window).scrollTop();
    if (st>=100){
        $('#header').addClass('fixed'); 
    }else{
        $('#header').removeClass('fixed');
    };
});

$('#header .btn-mobile-menu').on('click', function() {
    $('#header').toggleClass('white'); 
});


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
    if ($('.swiper').length) {
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: '1',
            speed: 800,
            spaceBetween: 17,
            loop: true,
            centeredSlides : true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },

            breakpoints : {
                768 : { //브라우저가 768보다 클 때
                    slidesPerView: '3',
                    centeredSlides : false,
                    spaceBetween: 43,
                    // loop: false,
                    navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    },
                },
              
            },
        });
    }
}
section01_Swiper();

function logo_info() {
    if ($(window).width() < 768) {
        $('.share-sns-list ul').prepend('<li class="type-share"><a href="javascript:;"><img src="assets/images/ico_share_m.png" alt="share_button"></a></li>');
        $(document).ready(function () {
            var user_area = $('.sns');

            for(var i=0; i<user_area.length; i++) {
                let src = user_area.eq(i).find('img').attr('src');
                let scrup = src.replace('@2x.png', '_m.png');
                user_area.eq(i).find('img').attr('src', scrup);
            };
        })
        
    } else {
        $('.type-share').remove();
    }

    $('.type-share').on('click', function() {
        $(this).parent().toggleClass('on');

        if (!$(this).parent().hasClass('on')) {
            $('.type-share').css('border-radius', '100%');
        } else {
            $('.type-share').css('border-radius', '50% 50% 0 0')
        }
    });

    $('.sns').on('mousedown', function() {
        $(this).toggleClass('on');
        $(this).siblings().removeClass('on');
    })

    
}
logo_info();

function observeResizing() {
    var delta = 500;
    var timer = null;
    var windowWidth = $(window).width();

    $('#wrap').prepend("<div class='resizeAlert'><span>화면사이즈 변경이 감지되었습니다. 잠시 후 새로고침 됩니다.</span></div>");
    
    $(window).on('resize', function() {
        if(windowWidth != $(window).width()) {
            clearTimeout(timer);
            var timer = setTimeout(resizeDone, delta);
        }
    });

    function resizeDone() {
        $('.resizeAlert').css('top', '0');

        setTimeout(function () {
            location.reload();
        }, 1000);
    };
}
observeResizing();

function clip(){
	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.");
}
