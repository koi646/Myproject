
window.onload=(function(){
	(function($){
	$.fn.typewrite=function(speed){
		var environment=this;
		this.each(function(){
			var speed1=speed;
			var $ele=$(environment),str=$ele.html(),index=0;
			$ele.html('');
			$ele.css(
				"display",'block'
			);//将div转换为显示
			var timer=setInterval(function(){
				var current = str.substr(index,1);
				if(current=="<"){
					index=str.indexOf('>',index)+1;//跳过标签
				}
				else{
					index++;
				}
				$(environment).html(str.substring(0,index)+(index & 1?'':'_'));
				if(index>=str.length){
					clearInterval(timer);
					$(environment).html($(environment).html().substr(0,str.length));//取消最后末尾的“_“
				}
			},speed);
		});
		return this;
	};
})(jQuery);
$("#test").typewrite(75);
}
)
