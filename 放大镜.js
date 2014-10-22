window.onload=function(){
	var small=document.getElementsByClassName('small')[0];
	var big=document.getElementsByClassName('big')[0];
	var thing=document.getElementsByClassName('thing')[0];
	var img1=document.getElementById('img1');
	var img2=document.getElementById('img2');
	small.onmouseover=function(){
		var left,top=0;
		thing.style.display='block';
		big.style.display='block';
		small.onmousemove=function(ev){

			var event=ev||window.event;//alert(thing.offsetHeight)
			left=event.clientX-small.offsetLeft-thing.offsetWidth/2;
			top=event.clientY-small.offsetTop-thing.offsetHeight/2;//console.log("left:"+left+"top:"+top);//设置小框的出现位置
			if(left<img1.offsetLeft){				
				left=img1.offsetLeft;
			}
			if(left>img1.offsetLeft+img1.offsetWidth-thing.offsetWidth){				
				left=img1.offsetLeft+img1.offsetWidth-thing.offsetWidth;
			}
			if(top<img1.offsetTop){				
				top=img1.offsetTop;
			}
			if(top>img1.offsetTop+img1.offsetHeight-thing.offsetHeight){				
				top=img1.offsetTop+img1.offsetHeight-thing.offsetHeight;
			}//当小框在边缘的时候
			thing.style.left=left+'px';
			thing.style.top=top+'px';
			document.title=left+"  "+top;//设置小框跟着鼠标移动

			var img2size=img2.offsetWidth*(img1.offsetWidth/thing.offsetWidth)

			img2.style.backgroundSize=img2size+'px '+img2size+'px'//设置右边大框出现的比例大小
			
			var img2X=(thing.offsetLeft-parseInt(window.getComputedStyle(small,null).paddingTop))*((img2size-img2.offsetWidth)/(img1.offsetWidth-thing.offsetWidth));
			var img2Y=(thing.offsetTop-parseInt(window.getComputedStyle(small,null).paddingLeft))*((img2size-img2.offsetHeight)/(img1.offsetWidth-thing.offsetWidth));
			img2.style.backgroundPosition='-'+img2X+'px '+'-'+img2Y+'px';
			console.log(img2size/img2.offsetHeight);
		}
		
	}
	small.onmouseout=function(){
		thing.style.display='none';
		big.style.display='none';
	}
}