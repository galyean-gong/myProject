//公共js
$(function() {
    //  语言栏
    $('.header-login>ul>li:last-child>a').click(function() {
        $(this).toggleClass('language-arrow');
        $(this).children('.language-box').toggle();
    });
    //end 语言栏
    //input弹框
    var num = 0;
    $('.header-search-icon').click(function() {
        if (num == 0) {
            $(this).addClass('fa-search-icon');
            $('.header-input').stop().animate({
                'width': '355px',

            }, 500);
            num++;
        } else if (num == 1) {
            setTimeout(function() {
                $('.header-search-icon').removeClass('fa-search-icon');
            }, 500);

            $('.header-input').stop().animate({
                'width': '',
            }, 500);
            num--;
        }
    });
    $('.header-search').mouseleave(function() {
        $('.header-input').css({ 'border': 'none', 'border-bottom': '1px solid #eee' })
    });
    $('.header-input').click(function() {
        $(this).css({
            'border': '1px solid cornflowerblue',
            'border-left': 'none'
        })
    });
    //滚动条
    $(window).scroll(function() {

        heg = $(window).scrollTop();

        if (heg > 128) {
            $('.header-nav').css({
                'min-width': '1340px',
                'position': 'fixed',
                'top': '0',


            });
        } else {
            $('.header-nav').css('position', 'static');
        }
    });
    //  二级菜单
    //  
    $('.test>div').mouseleave(function() {
        $(this).css('display', 'none');

        // -----------------------------------------
        $(".header-nav-bar>ul>li").removeClass("header-nav-bar-active");
        // -------------------------------------
    });
    $('.header-shop').mouseenter(function() {
        $('.test>div').css('display', 'none');
        $('.header-nav-bar>ul>li').removeClass("header-nav-bar-active");
    });
    $('.header-top').mouseenter(function() {
        $('.test>div').css('display', 'none');
        $('.header-nav-bar>ul>li').removeClass("header-nav-bar-active");
    });
    // .............................................
    $(".header-nav-bar>ul>li").mouseenter(function() {
        $(this).addClass("header-nav-bar-active").siblings().removeClass("header-nav-bar-active");
        $('.test > div').eq($(this).index()).css('display', 'block').siblings().css('display', 'none');
    });
    // 详细内容操作导航
    $(".header-nav-menu").mouseenter(function() {
        $(".header-nav-bar li").eq($(this).index()).addClass("header-nav-bar-active");
    });

});

////产品点击切换
$(function() {
    //  $('.main-title a').click(function(){
    //      $(this).css({
    //          'background-color':'#000',
    //          'color':'#fff'
    //      }).siblings().css({
    //          'background-color':'#fff',
    //          'color':'#000'
    //      });
    //      $('.main-product-box>div').toggleClass('list-one');
    //  });
    $('.main-title a:first').click(function() {
        $(this).css({
            'background-color': '#000',
            'color': '#fff'
        });
        $('.main-title a:last-child').css({
            'background-color': '#fff',
            'color': '#000'
        });
        $(".list-two").css("display", "block");
        $(".list-one").css("display", "none");
    });
    $('.main-title a:last-child').click(function() {
        $(this).css({
            'background-color': '#000',
            'color': '#fff'
        });
        $('.main-title a:first').css({
            'background-color': '#fff',
            'color': '#000'
        });
        $(".list-two").css("display", "none");
        $(".list-one").css("display", "block");
    });
});

//footer弹框
$(function() {
    var val = 0
    $('.footer-policy-icon>ul>li').click(function() {
        if (val == 0) {
            $(this).find('a').css({
                'background-position': '110px -26px',
                'background-color': '#ccc'
            });
            val++;
        } else if (val == 1) {
            $(this).find('a').css({
                'background-position': '110px -1px',
                'background-color': '#fff'
            });
            val--;
        }

        $('.policy-icon-selector').toggleClass('selector-toggle');
    });


});
