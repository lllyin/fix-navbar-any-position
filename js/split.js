$(function(){

	// 1.获取所有img对象
	var $contentImgObj = $(".pic_wrap a img");

	// 2.获取所有的代表图片第几个的span对象
	var $numSpanObj = $(".pic_wrap .pic_num span");

	// 3.获取所有的图片标题span对象
	var $titSpanObj = $(".pic_wrap .pic_tit span");

	// 4.获取图片张数
	var $pictot = $contentImgObj.length;

	// 5.获取轮播图左右箭头区域
	var $goPage = $(".pic_wrap .go_page");


	$numSpanObj.hover(function(){
		var idx = $(this).index();
		showImg(idx);
	});


	//鼠标进入图片区域显示标题，停止自动播放
	// 离开隐藏标题，继续自动播放
	var timer1 = null; 
	var index1 = 0;
	$(".pic_wrap").hover(hoverIn = function(){

		$(".pic_wrap .pic_tit").show();			//显示标题
		if (timer1) {
			clearInterval(timer1);
		}
		$goPage.fadeIn();						//左右切换图标显示

		var currIdx = $(".pic_wrap a img:visible").index();
		return function(){
			return currIdx;
		};

	},function(){
		$(".pic_wrap .pic_tit").hide();
		timer1 = setInterval(function(){
			//定时器执行代码
			showImg(index1);
			index1++;
			if (index1 == $pictot) {
				index1 = 0;
			}

		},500);
		$goPage.hide();
	}).trigger('mouseleave');


	// 切换上一张/下一张图片逻辑
	$goPage.click(function(event) {
		var currIdx = hoverIn()();

		if($(this).attr("id") == "go_pre"){
			console.log("更换前:"+currIdx);
			showImg(--currIdx);
			console.log("更换后:"+currIdx+"-------------");
		}

		if($(this).attr("id") == "go_next"){
			// var currIdx = hoverIn()();
			console.log("更换前:"+currIdx);
			if (currIdx == 4) {
				currIdx = -1;
			}
			showImg(++currIdx);
			console.log("更换后:"+currIdx+"-------------");
		}
	});


	// 显示图片代码
	function showImg(idx){

		$contentImgObj.eq(idx).show()
					.siblings().hide();

		$titSpanObj.eq(idx).show()
					.siblings().hide();

		$numSpanObj.eq(idx).addClass("chot")
					.siblings().removeClass('chot');
	}
});
