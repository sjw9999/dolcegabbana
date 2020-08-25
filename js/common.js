// JavaScript Document

$(function() { // 문서가 열렸을때 실행

    $('#image_2 .images > li').mouseenter(function () { // .images 자식 li를 마우스 오버했을때
        // this = .topmenu의 자식 li중에서 현재 마우스 오버한 대상
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('.jpg', '_press.jpg'))
        // 마우스 오버하고 있는 li의  자식, 자식 중에서 img태그 선택 , attr(속성) src의 값을  replace(변경) .jpg찾아서 _press.jpg로 변경
    })

    $('#image_2 .images > li').mouseleave(function () { // .images 자식 li를 마우스 아웃했을때
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('_press.jpg', '.jpg'))
    })




    $('#fashionshow_content > div').mouseenter(function () { // #fashionshow_content 자식 div를 마우스 오버했을때
        // this = .topmenu의 자식 li중에서 현재 마우스 오버한 대상
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('.jpg', '_on.jpg'))
        // 마우스 오버하고 있는 li의  자식, 자식 중에서 img태그 선택 , attr(속성) src의 값을  replace(변경) .jpg찾아서 _press.jpg로 변경
    })

    $('#fashionshow_content > div').mouseleave(function () { // #fashionshow_content 자식 div를 마우스 아웃했을때
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('_on.jpg', '.jpg'))
    })



    $('#accessories_image_wrap > ul > li').mouseenter(function () { // #accessories_image_wrap 자식 li를 마우스 오버했을때
        // this = .topmenu의 자식 li중에서 현재 마우스 오버한 대상
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('.jpg', '_on.jpg'))
        // 마우스 오버하고 있는 li의  자식, 자식 중에서 img태그 선택 , attr(속성) src의 값을  replace(변경) .jpg찾아서 _press.jpg로 변경
    })

    $('#accessories_image_wrap > ul > li').mouseleave(function () { // #accessories_image_wrap 자식 li를 마우스 아웃했을때
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('_on.jpg', '.jpg'))
    })





    $('#product_popup_list_wrap > ul > li').mouseenter(function () { // #product_popup_list_wrap 자식 li를 마우스 오버했을때
        // this = .topmenu의 자식 li중에서 현재 마우스 오버한 대상
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('.png', '_on.png'))
        // 마우스 오버하고 있는 li의  자식, 자식 중에서 img태그 선택 , attr(속성) src의 값을  replace(변경) .jpg찾아서 _press.jpg로 변경
    })

    $('#product_popup_list_wrap > ul > li').mouseleave(function () { // #product_popup_list_wrap 자식 li를 마우스 아웃했을때
        $(this).children().children('img').attr('src', $(this).children().children('img').attr('src').replace('_on.png', '.png'))
    })






    $('#header .inner .link').click(function () {
        $('#product_popup').fadeIn();
    });

    $('#product_popup .button_close, #product_popup_list_wrap > ul > li').click(function () {
        $('#product_popup').fadeOut();
    });




    $('#header .inner .link_w').click(function () {
        $('#product_popup').fadeIn();
    });

    $('#product_popup .button_close, #product_popup_list_wrap > ul > li').click(function () {
        $('#product_popup').fadeOut();
    });



    setCollectionHover()

    window.addEventListener('scroll', function(event) {
        console.log('scroll');
            let scrollTop = $(this).scrollTop();
            let scrollBottom = scrollTop + $(this).height();
            let fontPositionTop = $('#bottom').position().top;
            let nextPositionTop = $('#next').position().top;
            if(scrollTop >= fontPositionTop && scrollBottom < nextPositionTop) {
                $('#bottom .blooming_font').addClass('on');
            } else {
                $('#bottom .blooming_font').removeClass('on');
            }
    });
});

function setCollectionHover() {
    $('#collection_menu > div:nth-child(1)').mouseenter(function(event) {
        $('#collection_menu_hover > div:nth-child(1)').addClass('on');
        $('#collection_menu > div > a').addClass('on')
        $('#collection_menu > div:nth-child(1) > a').removeClass('on')
    });
    $('#collection_menu > div:nth-child(1)').mouseleave(function(event) {
        $('#collection_menu_hover > div:nth-child(1)').removeClass('on');
        $('#collection_menu > div > a').removeClass('on')
    });

    $('#collection_menu > div:nth-child(2)').mouseenter(function(event) {
        $('#collection_menu_hover > div:nth-child(2)').addClass('on');
        $('#collection_menu > div > a').addClass('on')
        $('#collection_menu > div:nth-child(2) > a').removeClass('on')
    });
    $('#collection_menu > div:nth-child(2)').mouseleave(function(event) {
        $('#collection_menu_hover > div:nth-child(2)').removeClass('on');
        $('#collection_menu > div > a').removeClass('on')
    });
    $('#collection_menu > div:nth-child(3)').mouseenter(function(event) {
        $('#collection_menu_hover > div:nth-child(3)').addClass('on');
        $('#collection_menu > div > a').addClass('on')
        $('#collection_menu > div:nth-child(3) > a').removeClass('on')
    });
    $('#collection_menu > div:nth-child(3)').mouseleave(function(event) {
        $('#collection_menu_hover > div:nth-child(3)').removeClass('on');
        $('#collection_menu > div > a').removeClass('on')
    });
    $('#collection_menu > div:nth-child(4)').mouseenter(function(event) {
        $('#collection_menu_hover > div:nth-child(4)').addClass('on');
        $('#collection_menu > div > a').addClass('on')
        $('#collection_menu > div:nth-child(4) > a').removeClass('on')
    });
    $('#collection_menu > div:nth-child(4)').mouseleave(function(event) {
        $('#collection_menu_hover > div:nth-child(4)').removeClass('on');
        $('#collection_menu > div > a').removeClass('on')
    });
    $('#collection_menu > div:nth-child(5)').mouseenter(function(event) {
        $('#collection_menu_hover > div:nth-child(5)').addClass('on');
        $('#collection_menu > div > a').addClass('on');
        $('#collection_menu > div:nth-child(5) > a').removeClass('on');
    });
    $('#collection_menu > div:nth-child(5)').mouseleave(function(event) {
        $('#collection_menu_hover > div:nth-child(5)').removeClass('on');
        $('#collection_menu > div > a').removeClass('on');
    });
    $('#collection_menu > div:nth-child(6)').mouseenter(function(event) {
        $('#collection_menu_hover > div:nth-child(6)').addClass('on');
        $('#collection_menu > div > a').addClass('on');
        $('#collection_menu > div:nth-child(6) > a').removeClass('on');
    });
    $('#collection_menu > div:nth-child(6)').mouseleave(function(event) {
        $('#collection_menu_hover > div:nth-child(6)').removeClass('on');
        $('#collection_menu > div > a').removeClass('on');
    });
    $('#collection_menu > div:nth-child(7)').mouseenter(function(event) {
        $('#collection_menu_hover > div:nth-child(7)').addClass('on');
        $('#collection_menu > div > a').addClass('on')
        $('#collection_menu > div:nth-child(7) > a').removeClass('on')
    });
    $('#collection_menu > div:nth-child(7)').mouseleave(function(event) {
        $('#collection_menu_hover > div:nth-child(7)').removeClass('on');
        $('#collection_menu > div > a').removeClass('on')
    });
}

$(function () {

    $('#fashion_show .fashion_show_menu clearfix > ul > li').mouseenter(function() {
        console.log('fashion_show_menu clicked' );
    });

    $('.left').click(function () {
        $('.box').addClass('add');
    });


    $('.right').click(function () {
        $('.box').addClass('add2');
    });

    $('#news_slides').slidesjs({
        width:970,
        height:465,
        play: {
            //active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "fade", // 효과, slide/fade
            auto: true, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 2500 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: false, // 버튼 활성화/비활성화
            effect: "fade"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: true,
            effect: "fade"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 800
            },
            slide: {
                speed: 1600
            }
        }
    });

    $('#fashion_show_slides').slidesjs({
        width:970,
        height:465,
        play: {
            //active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "fade", // 효과, slide/fade
            auto: true, // 자동시작
            pauseOnHover: true, // 마우스 오버시 멈춤
            restartDelay: 250 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: false, // 버튼 활성화/비활성화
            effect: "fade"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: true,
            effect: "fade"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 1000
            },
            slide: {
                speed: 1600
            }
        }
    });

    $('#project_slides').slidesjs({
        width:1920,
        height:1953,
        play: {
            //active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "fade", // 효과, slide/fade
            auto: true, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 250 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: true, // 버튼 활성화/비활성화
            effect: "fade"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: false,
            effect: "fade"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 1000
            },
            slide: {
                speed: 1600
            }
        },
        callback: {
            loaded: function() {
                project01Selected(true);
            },
            start: function(page) {
            },
            complete: function(page) {
                slideChanged(page);
            }
          }
    });

    function project01Selected(isAdd) {
        if(isAdd) {
            $('#project_01 .image_01').addClass('on');
            $('#project_01 .image_02').addClass('on');
            $('#project_01 .image_03').addClass('on');
        } else {
            $('#project_01 .image_01').removeClass('on');
            $('#project_01 .image_02').removeClass('on');
            $('#project_01 .image_03').removeClass('on');
        }
        
    }

    function project02Selected(isAdd) {
        if(isAdd) {
            $('#project_02 .image_01').addClass('on');
            $('#project_02 .image_02').addClass('on');
            $('#project_02 .image_03').addClass('on');
        } else {
            $('#project_02 .image_01').removeClass('on');
            $('#project_02 .image_02').removeClass('on');
            $('#project_02 .image_03').removeClass('on');
        }
        
    }

    function project03Selected(isAdd) {
        if(isAdd) {
            $('#project_03 .image_01').addClass('on');
            $('#project_03 .image_02').addClass('on');
            $('#project_03 .image_03').addClass('on');
            $('#project_03 .image_04').addClass('on');
        } else {
            $('#project_03 .image_01').removeClass('on');
            $('#project_03 .image_02').removeClass('on');
            $('#project_03 .image_03').removeClass('on');
            $('#project_03 .image_04').removeClass('on');
        }
        
        
    }

    function project04Selected(isAdd) {
        if(isAdd) {
            $('#project_04 .image_01').addClass('on');
            $('#project_04 .image_02').addClass('on');
            $('#project_04 .image_03').addClass('on');
            $('#project_04 .image_04').addClass('on');
        } else {
            $('#project_04 .image_01').removeClass('on');
            $('#project_04 .image_02').removeClass('on');
            $('#project_04 .image_03').removeClass('on');
            $('#project_04 .image_04').removeClass('on');
        }
    }



    function slideChanged(page) {
        if (page == 1) {
            project01Selected(true);
            project04Selected(false);
        }
        if (page == 2) {
            project02Selected(true);
            project01Selected(false);
        }
        if (page == 3) {
            project03Selected(true);
            project02Selected(false);
        }
        if (page == 4) {
            project04Selected(true);
            project03Selected(false);
        }
    }


    $('#advertising_slides').slidesjs({
        width:1920,
        height:1953,
        play: {
            //active: false, // play/stop 버튼 활성화 , true=활성화, false=비활성화
            interval: 3000, // 대기시간, 1000=1초,
            effect: "fade", // 효과, slide/fade
            auto: true, // 자동시작
            pauseOnHover: false, // 마우스 오버시 멈춤
            restartDelay: 250 // 마우스 아웃시 재동작 시간
        },
        navigation: {// 이전/다음 버튼
            active: true, // 버튼 활성화/비활성화
            effect: "fade"
        },
        pagination: {// 페이지네이션, 현재 선택된 슬라이드표시, 전체 갯수 표시
            active: false,
            effect: "fade"
        },
        effect: { // 효과 옵션
            fade: {
                speed: 1000
            },
            slide: {
                speed: 1600
            }
        },
        callback: {
            loaded: function() {
                advertiseWomenSelected(true);
            },
            start: function(page) {
            },
            complete: function(page) {
                if (page == 1) {
                    advertiseWomenSelected(true)
                    advertiseChildrenSelected(false)
                }
                if (page == 2) {
                    advertiseMenSelected(true);
                    advertiseWomenSelected(false);
                }
                if (page == 3) {
                    advertiseChildrenSelected(true)
                    advertiseMenSelected(false)
                }
            }
          }
    });


    function advertiseMenSelected(isAdd) {
        if(isAdd) {
            $('#advertising_men .image_01').addClass('on');
            $('#advertising_men .image_02').addClass('on');
            $('#advertising_men .image_03').addClass('on');
            $('#advertising_men .image_04').addClass('on');
        } else {
            $('#advertising_men .image_01').removeClass('on');
            $('#advertising_men .image_02').removeClass('on');
            $('#advertising_men .image_03').removeClass('on');
            $('#advertising_men .image_04').removeClass('on');
        }
        
    }

    function advertiseWomenSelected(isAdd) {
        if(isAdd) {
            $('#advertising_women .image_01').addClass('on');
            $('#advertising_women .image_02').addClass('on');
            $('#advertising_women .image_03').addClass('on');
            $('#advertising_women .image_04').addClass('on');
        } else {
            $('#advertising_women .image_01').removeClass('on');
            $('#advertising_women .image_02').removeClass('on');
            $('#advertising_women .image_03').removeClass('on');
            $('#advertising_women .image_04').removeClass('on');
        }
        
    }

    function advertiseChildrenSelected(isAdd) {
        if(isAdd) {
            $('#advertising_children .image_01').addClass('on');
            $('#advertising_children .image_02').addClass('on');
            $('#advertising_children .image_03').addClass('on');
            $('#advertising_children .image_04').addClass('on');
        } else {
            $('#advertising_children .image_01').removeClass('on');
            $('#advertising_children .image_02').removeClass('on');
            $('#advertising_children .image_03').removeClass('on');
            $('#advertising_children .image_04').removeClass('on');
        }
        
        
    }

})



function goBack() {
    console.log('goBack()')
    window.history.go(-1);
}



