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

switch(str)
{
case "hack":
location.href="hack.html";
return;
case "exit":
location.href="../../";
return;
case "help":
$("body").innerHTML="exit 退出终端<br/>hack 重新加载<br/>*暂无其他操作命令<br/>WO:#";
wof($("body"));
return;
}
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
$("body").innerHTML=e.name+":"+e.message+"<br/>*这是个错误提示！<br/>*获取帮助输入:help<br/>WO:#";
wof($("body"));
//alert(e.name+":"+e.message);
}

}
}
window.setInterval("ssh('body','WO:#');",1000);