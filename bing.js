var rightArrowEle = document.getElementById("rightArrow");
var leftArrowEle=document.getElementById("leftArrow")
var now = 1;
rightArrowEle.onclick=function(){
	changeRight();
}
leftArrowEle.onclick=function(){
	changeleft();
}
function changeRight(){
	if (now==4){
		now=1;
	}else{
		now=now+1;
	}
	
	var objImg = document.getElementsByTagName("body");
	objImg[0].setAttribute("style","background-image:url(images/"+now+".jpg)")
	//objImg[0].style.backgroundImage="url(images/2.jpg)"
}
function changeleft(){
	if (now==1){
		now=4;
	}else{
		now=now-1;
	}
	
	var objImg = document.getElementsByTagName("body");
	objImg[0].setAttribute("style","background-image:url(images/"+now+".jpg)")
	//objImg[0].style.backgroundImage="url(images/2.jpg)"
}

