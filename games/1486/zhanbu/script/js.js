function $(id){return document.getElementById(id);}
function yao(){
var yao=Math.floor(Math.random()*10);
if(yao>4){
return '<img src="../picture/z.gif">';
}else{
return '<img src="../picture/f.gif">';
}
}

function yaoyao(){
var f=yao()+yao()+yao();
var e=yao()+yao()+yao();
var d=yao()+yao()+yao();
var c=yao()+yao()+yao();
var b=yao()+yao()+yao();
var a=yao()+yao()+yao();
if(a.split('z').length-1>1){
var ay=6;
}else{
var ay=9;
}
if(b.split('z').length-1>1){
var by=6;
}else{
var by=9;
}
if(c.split('z').length-1>1){
var cy=6;
}else{
var cy=9;
}
if(d.split('z').length-1>1){
var dy=6;
}else{
var dy=9;
}
if(e.split('z').length-1>1){
var ey=6;
}else{
var ey=9;
}
if(f.split('z').length-1>1){
var fy=6;
}else{
var fy=9;
}
function l(id){return id+" <img src='../book/data/bagua/picture/"+id+".png' style='height:20px;'>";}
$("zf").innerHTML=a+' 上爻'+l(ay)+'<br/>'+b+' 五爻'+l(by)+'<br/>'+c+' 四爻'+l(cy)+'<br/>'+d+' 三爻'+l(dy)+'<br/>'+e+' 二爻'+l(ey)+'<br/>'+f+' 初爻'+l(fy)+'<br/>卦号：'+fy+ey+dy+cy+by+ay;
}
function liuyao(){
$("img").innerHTML="<br/>摇卦的时候心中想着需要占卜的事，不可有杂念，比如专心想着明日运势，24个小时，每一爻代表4个小时，阳爻9为吉，阴爻6为凶。<br/><br/>初爻：0-4点<br/>二爻：4-8点<br/>三爻：8-12点<br/>四爻：12-16点<br/>五爻：16-20点<br/>上爻：20-0点<br/><br/>也许只能占卜未来，不能占卜过去，也许通过占卜你知道了明天会经历什么，本来是不知道的，知为阳，不知为阴，不知变知，阴阳变动，再一次占卜出来的结果也就变动了，我比较相信概率论，意测比工具准。";
for(i=0;i<6;i++){
yaoyao();
}
}