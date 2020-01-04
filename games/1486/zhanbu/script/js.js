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
$("img").innerHTML="<br/>摇卦的时候心中想着需要占卜的事，不可有杂念，比如专心想着今日运势。";
for(i=0;i<6;i++){
yaoyao();
}
}