function wo_date(){var d=new Date();var y= d.getFullYear();var m=d.getMonth()+1;var ds=d.getDate();if(ds<=9){ds='0'+ds;}var h=d.getHours();if(h<=9){h='0'+h;}var f=d.getMinutes();if(f<=9){f='0'+f;}var s=d.getSeconds();if(s<=9){s='0'+s;}var days=d.getDay();
return y+'-'+m+'-'+ds+' '+h+':'+f+':'+s+' 星期'+days;
}

function $(id){return document.getElementById(id);}
function wof(obj) {
if (window.getSelection) {
obj.focus();
var range = window.getSelection();
range.selectAllChildren(obj);
range.collapseToEnd();}
else if(document.selection) {
var range = document.selection.createRange();
//var range = document.body.createTextRange();
range.moveToElementText(obj);
range.collapse(false);
range.select();
}}
function ssh(id,ssh){
str=$(id).innerText;
var strup=str.lastIndexOf(ssh);
str=str .substring(strup,str .length);
strend=str.charAt(str.length - 1);
if(strend=='\n'){
var str = str.replace("\n",'');
var str = str.replace("\n",'');
var ssh = ssh.replace("\n",'');
var str = str.replace(ssh,'');

switch(str){case "hack":location.href="hack.html";return;case "exit":location.href="../../";return;case "help":$("body").innerHTML="exit 退出终端<br/>date 获取当前时间<br/>baidu关键词 /搜索引擎<br/>href网址 /网络跳转<br/>youlai关联词 /问医生<br/>WO:#";wof($("body"));return;case "date":$("body").innerHTML=wo_date()+"<br/>WO:#";wof($("body"));return;}
if(str.slice(0,5)==="baidu"){var word=str.slice(5);$("body").innerHTML="*正在搜索："+word+"<br/>WO:#";wof($("body"));location.href="https://m.baidu.com/s?word="+word;return;
}else if(str.slice(0,4)==="href"){
var word=str.slice(4);$("body").innerHTML="*正在跳转："+word+"<br/>WO:#";wof($("body"));location.href=word;return;
}else if(str.slice(0,6)==="youlai"){
var word=str.slice(6);$("body").innerHTML="*有来医生："+word+"<br/>WO:#";wof($("body"));location.href="https://m.youlai.cn/cse/search?q="+word;return;}


try{
$str=eval(str);
if(typeof($str)==="undefined"){
$("body").innerHTML="你输入的命令是：<br/>"+str+"<br/>WO:#";
wof($("body"));
return;
}else{
$("body").innerHTML=$str+"<br/>WO:#";
wof($("body"));
}
}catch(e){
$("body").innerHTML=e.name+":"+e.message+"<br/>*这是个错误提示！<br/>*获取帮助输入:help<br/>WO:#";wof($("body"));
//alert(e.name+":"+e.message);
}}}

window.setInterval("ssh('body','WO:#');",1000);