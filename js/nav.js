/*---导航动画（旧）---*/
/*$(document).ready(function(){
	$("#nav").click(function(){
		$("#nav").css("width","1170px");
		$("#nav").css("box-shadow","0px 0px 10px rgba(30, 30, 30, 0.55)");
		$("#ul").css({"animation":"nav_jy 1s forwards","display":"block"});
	});
});

$(document).ready(function(){
	$("#nav").click(function(){	
		$("#nav").removeAttr("style");
		$("#ul").removeAttr("style");
	});
});*/
/*---导航动画（新）---*/
$(document).ready(function(){
	$("#nav").click(function(){
		$("#nav").toggleClass("nav");
		$("#ul").toggleClass("ul");
	});
});
/*---时间轴动画---*/
$(document).ready(function(){
	$(".te01").click(function(){
		$(".te01").toggleClass("times");
		$(".wzz01").toggleClass("wzs");
	});
});
$(document).ready(function(){
	$(".te02").click(function(){
		$(".te02").toggleClass("times");
		$(".wzz02").toggleClass("wzs");
	});
});
$(document).ready(function(){
	$(".te03").click(function(){
		$(".te03").toggleClass("times");
		$(".wzz03").toggleClass("wzs");

	});
});
$(document).ready(function(){
	$(".te04").click(function(){
		$(".te04").toggleClass("times");
		$(".wzz04").toggleClass("wzs");
	});
});
