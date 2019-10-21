function $(id){return document.getElementById(id);}

function rotate(id,value){
document.getElementById(id).style.webkitTransform="rotate(" + value + "deg)";
document.getElementById(id).style.msTransform="rotate(" + value + "deg)";
document.getElementById(id).style.MozTransform="rotate(" + value + "deg)";
document.getElementById(id).style.OTransform="rotate(" + value + "deg)";
document.getElementById(id).style.transform="rotate(" + value + "deg)";
}

function t(){var d=new Date();var y=d.getFullYear();var m=d.getMonth()+1;var ds=d.getDate();if(ds <=9){ds='0'+ds;}var h=d.getHours();if(h <=9){h='0'+h;}var f=d.getMinutes();if(f<=9){f='0'+f;}var s=d.getSeconds();if(s<=9){s='0'+s;}
var days=d.getDay();
ff=Number(f);ty=0.25*(h*60+ff)-15;
rotate("t","-"+ty);
if(h>12){$("img").src="image/2.png";}
var jd=100-((1440-((h*60)+ff))/1440)*100;
var jd=Number(jd);
$("jd").style.width=jd+"%";
$("ti").innerHTML ='<br/>'+y+'-'+m+'-'+ds+' '+h+':'+f+':'+s+' 星期'+days+'<br/>今日的时间已使用'+jd.toFixed(0)+'%';
}
t();
setInterval("t();",1000);
function zhizhen(){zz=parseInt($("zz").innerText);
if(zz<3600){$("zz").innerText=zz+16;
window.setTimeout("zhizhen();","1");}
rotate("zhizhen","-"+zz);
}
zhizhen();
if(window.DeviceOrientationEvent){
window.addEventListener('deviceorientation',function (event){
alpha=event.alpha,beta=event.beta,gamma=event.gamma;
if($("zz").innerText>3598){
if(alpha<180){
zhizhen=180+(alpha+360);
}else{
zhizhen=180+alpha;
}
rotate("zhizhen",zhizhen);
}
rotate("img",alpha);
if(beta>22 || beta<-16 || gamma>22 || gamma<-22){
$("text").innerText="请把手机放平";
}else{
var $alpha=360-alpha;
switch(true){
case $alpha>337.5 || $alpha<22.5:text="朝北"+$alpha;
break;
case $alpha>22.5 && $alpha<67.5:text="朝东北:"+$alpha;
break;
case $alpha>67.5 && $alpha<112.5:text="朝东:"+$alpha;
break;
case $alpha>112.5 && $alpha<157.5:text="朝东南:"+$alpha;
break;
case $alpha>157.5 && $alpha<202.5:text="朝南:"+$alpha;
break;
case $alpha>202.5 && $alpha<247.5:text="朝西南:"+$alpha;
break;
case $alpha>247.5 && $alpha<292.5:text="朝西:"+$alpha;
break;
case $alpha>292.5 && $alpha<337.5:text="朝西北:"+$alpha;
break;
//default:text = "北";
}
$("text").innerText=text;
//$("wodnxb").innerText=alpha;
}},false);
}else{
$("text").innerText='你的浏览器不支持陀螺仪';
}