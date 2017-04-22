//点击购物按钮
$(function() {
    $('.bag').click(function() {
        alert('请先注册成为超级VIP')
    });

});
//点击搜索框时
$(function() {
    $('.header-search').click(function() {
        $('.search').toggleClass('search-toggle');
        $('.search-bar').slideToggle();
    });
});
//点击打开菜单
$(function() {
    $('.menu').click(function() {
        $('body').addClass('menuOpen');
        $('nav').css({
            'display': 'block'
        })
    });

});
//点击关闭菜单
$(function() {
    $('.nav-btn').click(function() {
        $('body').removeClass('menuOpen');
        $('nav').css({
            'display': 'none'
        });
    });
});
//点击旋转导航
$(function() {
    var num = 0;
    $('.nav-title').click(function() {
        if (num == 0) {
            $(this).css({
                'background-color': '#A48667',
                'color': '#fff'
            });
            $(this).find('span').css({
                'transform': 'rotate(180deg)',
                'transition': 'all .5s'
            });
            $(this).siblings('.nav-list').find('ul').fadeIn().css('display', 'block')
            num++;
        } else if (num == 1) {
            $(this).css({
                'background-color': '',
                'color': '#000'
            });
            $(this).find('span').css({
                'transform': 'rotate(0deg)',

            });
            $(this).siblings('.nav-list').find('ul').css('display', 'none');
            num--;

        }

    });
});
//点击导航按钮
$(function() {
    $('.header-title ul li').each(function(i, ele) {
        $(ele).children('a').click(function() {
            $(this).addClass('title-btn').parent().siblings().children().removeClass('title-btn')
        })
    })
});
//录播图
$(function() {
        window.mySwipe = new Swipe(document.getElementById('imglist'), {
            startSlide: 2,
            speed: 400,
            auto: 3000,
            continuous: true,
            disableScroll: false,
            //stopPropagation: false,
            // callback: function(index, elem) {},
            //transitionEnd: function(index, elem) {}
        });
    })
    //新品上市转换
$(function() {
    $('.new-product-circle>ul>li').each(function(i, ele) {
        $(ele).click(function() {
            $(ele).addClass('circle-active').siblings().removeClass('circle-active');
            $('.new-product>div').eq($(this).index()).css('position', 'relative').stop().animate({ 'left': 0 }, 300).siblings().css('position', 'absolute');
            $('.new-product>div').eq($(this).index()).prevAll().each(function(i, ele) {
                $(ele).stop().animate({ 'left': '-' + (i + 1) * 100 + '%' }, 300);
            });
            $('.new-product>div').eq($(this).index()).nextAll().each(function(i, ele) {
                $(ele).stop().animate({ 'left': (i + 1) * 100 + '%' }, 300);
            });
        });
    });

});
//爆款推荐
$(function() {
    $('.exp-product-circle>ul>li').each(function(i, ele) {
        $(ele).click(function() {
            $(ele).addClass('exp-circle-active').siblings().removeClass('exp-circle-active');
            $('.exp-product>div').eq($(this).index()).css('position', 'relative').stop().animate({ 'left': 0 }, 300).siblings().css('position', 'absolute');
            $('.exp-product>div').eq($(this).index()).prevAll().each(function(i, ele) {
                $(ele).stop().animate({ 'left': '-' + (i + 1) * 100 + '%' }, 300);
            });
            $('.exp-product>div').eq($(this).index()).nextAll().each(function(i, ele) {
                $(ele).stop().animate({ 'left': (i + 1) * 100 + '%' }, 300);
            });
        });
    });

});
//main-banner -pic录播图
$(function() {
    $('.mybtn-list>ul>li').each(function(i, ele) {
        $(ele).click(function() {
            $(ele).addClass('btn-active').siblings().removeClass('btn-active');
            $('.main-banner-box>div').eq($(this).index()).css('position', 'relative').stop().animate({ 'left': 0 }, 300).siblings().css('position', 'absolute');
            $('.main-banner-box>div').eq($(this).index()).prevAll().each(function(i, ele) {
                $(ele).stop().animate({ 'left': '-' + (i + 1) * 100 + '%' }, 300);
            });
            $('.main-banner-box>div').eq($(this).index()).nextAll().each(function(i, ele) {
                $(ele).stop().animate({ 'left': (i + 1) * 100 + '%' }, 300);
            });
        });
    });

});
