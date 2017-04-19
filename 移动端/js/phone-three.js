//点击搜索框时
$(function() {
    $('.header-search').click(function() {
        $('.search').toggleClass('search-toggle');
        $('.search-bar').slideToggle();
    });
})
