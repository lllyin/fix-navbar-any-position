$(function(){
	// 固定位置导航条
	var $fixedObj = $("nav[name^='navbar-fixed-top']");
	console.log($fixedObj.html());
	var $fixedNameVal = $fixedObj.attr("name");
	console.log($fixedNameVal);
	var $targetTopVal = $fixedNameVal.match(/\d+$/g);
	console.log($targetTopVal);
	$(window).scroll(function(){
		console.log($(window).scrollTop());
		var $topVal = $(window).scrollTop();
		if($topVal >= $targetTopVal){
			$fixedObj.css({
				position:"fixed",
				top:0,
			});
		}
		if ($topVal < $targetTopVal) {
			$fixedObj.css({
				position:"relative",
			});
		}
	});
})