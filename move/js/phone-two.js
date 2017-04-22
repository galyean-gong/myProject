//翻转按钮
$(function() {
    $('.main-add').click(function() {
        $('.main-hide-text').slideToggle();
        $('.main-row').toggleClass('main-row-toggle');
    });

});

$(function() {
    $('.product-row-icon').click(function() {
        var num = 0;
        if (num == 0) {
            $(this).css({
                'transform': 'rotate(180deg)',
                'transition': ' all .5s'
            }).hide();
            $('.product-last-hide').fadeIn().css('display', 'block');

        }



    });
});
