//点击切换样式
$(function(){
	$('.main-strat-list>ul>li').click(function(){
		$(this).addClass('mylist-active').siblings().removeClass('mylist-active')
	})
});
