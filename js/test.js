$(function(){
	if($("meta[name='totop']").attr("toggle") == "true"){
		$("<div id='totop'><img src='../img/top.jpg'></div>").appendTo("body");
		$("#totop").css({
			width:"170px",
			height:"170px",
			position:"fixed",
			right:"20px",
			bottom:"20px",
		});
		
		//如果滚动条高度为0，隐藏按钮
		if($(window).scrollTop() == 0){
			$("#totop").hide();
		}
		
		//监听浏览器滚动事件
		$(window).scroll(function(){
			
			//如果滚动条高度为0，隐藏按钮
			if($(window).scrollTop() == 0){
				$("#totop").hide();
			}
			if($(window).scrollTop() != 0){
				$("#totop").stop().slideDown(100);
			}
		});

		//给按钮添加点击事件
		$("#totop").click(function(){
			$("html,body").animate({scrollTop:0},500);	//兼容火狐，chrome，火狐采用html，chrome采用body
		});
		
		//当鼠标滑过不透明透明度1，离开透明度渐变0.6
		var timer = null;
		$("#totop").hover(function(){
			$("#totop").css("opacity","1");
		},function(){
			if ($(this).is(":visible")) {
				$(this).animate({"opacity":"0.6"},2000);
			}
		}).trigger("mouseleave");
		
		
	}
});


