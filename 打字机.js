
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
			);
			var timer=setInterval(function(){
				var current = str.substr(index,1);
				if(current=="<"){
					index=str.indexOf('>',index)+1;
				}
				else{
					index++;
				}
				$(environment).html(str.substring(0,index)+(index & 1?'':'_'));
				if(index>=str.length){
					clearInterval(timer);
					$(environment).html($(this).html().substring(0,str.length));
				}
			},speed);console.log(speed);
		});
		return this;
	};
})(jQuery);
$("#test").typewrite(75);
}
)
