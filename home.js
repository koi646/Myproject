window.onload=function(){
	showPic("num",'no',"show","mouseover",1000);
	$(".num").eq(0).trigger("mouseover");
	
}
function showPic(classname,images,show,how,speed){
	$feet=$("."+classname);//获取下标栏
 	for(var i=0;i<$feet.length;i++){
 		$feet.eq(i).mouseover({msg:i},function(event){
 			$feet.eq(event.data.msg).siblings().css("opacity",0.5)
 				$feet.eq(event.data.msg).css("opacity",1);console.log();
 		})//绑定了鼠标移上去改变下角标颜色的事件
 		$feet.eq(i).bind(how,{index:i},function(event){
 			$("\."+images).eq(event.data.index).addClass(show)
 			.siblings().removeClass(show).stop();
 			$('\.'+images).eq(event.data.index).css({
 				opacity: 0
 			})
 			.animate({
 				opacity: 1
 			},1000)
 		})//绑定更换图片
 	}
 }//图片显示
 function hovertime(time,number,max){
  	if(number>max-1){
  		number=0;
  	}console.log(number);
  	$(".num").eq(number).trigger("mouseover");
  	number++;console.log(number+"!!!");
  	setTimeout(function(){
  		hovertime(time,number,max)
  	},time);
}//自动切换
 hovertime(5000,0,5);



