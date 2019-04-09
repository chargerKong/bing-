var rightArrowEle = document.getElementById("rightArrow");
var leftArrowEle=document.getElementById("leftArrow");
var objImg = document.getElementsByTagName("body");
var datab=localStorage;
var now=1;
var key='theme';
getdb();
setbg();

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
		now++;
	}
	
	setbg()
	//objImg[0].style.backgroundImage="url(images/2.jpg)"
	savedb(now);
}
function changeleft(){
	if (now==1){
		now=4;
	}else{
		now--;
	}
	
	setbg()
	//objImg[0].style.backgroundImage="url(images/2.jpg)"
	savedb(now);
}

function savedb(val){
	datab.setItem(key,val);
}

function getdb(){

	if(datab.getItem(key)){
		now=datab.getItem(key)
	}
}
function setbg(){
	objImg[0].setAttribute("style","background-image:url(images/"+now+".jpg)")
}

//视频部分
var mybtn=document.getElementById('notice');
var myVideo=document.getElementById("myVideo")
mybtn.addEventListener("click",function(){
	videoEvent();
})

function videoEvent(){
	if (myVideo.style.display=="block") {
		myVideo.style.display="none";
		myVideo.pause();
	}else{
		myVideo.style.display="block";
		myVideo.play();
	}
}

//地图部分
var myMap = document.getElementById("myMap");
var location1=document.getElementById("location1")
var baiduKey="vNFwGBFqILRZHFYHhqTHQSsBZFE17WCO";

location1.addEventListener("click",function(){

	navigator.geolocation.getCurrentPosition(showPosition,onError);
	mapEvent();
})
function showPosition(position) {
		  // p.innerHTML="纬度: " + position.coords.latitude + 
		  // "<br>经度: " + position.coords.longitude;	
	
	 var weidu = (position.coords.longitude);
	 
	 var jingdu =(position.coords.latitude);
	 
	 var weizhi ="http://api.map.baidu.com/staticimage/v2?ak="+baiduKey+
	 "&mcode=666666&center="+jingdu+","+weidu+"&width=300&height=200&zoom=16";
	 myMap.setAttribute("src",weizhi);



}
function onError(error){
	switch (error.code){
		case error.TIMEOUT:
		myMap.innerHTML="请求超时";
		break;
		case error.POSITION_UNAVAILABLE:
		myMap.innerHTML="无法获取";
		break;
		case error.PERMISSION_DENIED:
		myMap.innerHTML="没有权限获取当前位置信息，请在浏览器中给定相应的位置";
		break;
		case error.UNKNOWN_ERROR:
		myMap.innerHTML="未知错误";    
	    break;
	}
}

function mapEvent(){
	if (myMap.style.display=="block") {
		myMap.style.display="none";
		
	}else{
		myMap.style.display="block";
		
	}
}
