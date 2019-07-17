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
try{
$str=eval(str);
}catch(e){
$("body").innerHTML=e.name+":"+e.message+"<br/>WO:#";
wof($("body"));
//alert(e.name+":"+e.message);
}
$("body").innerHTML=$str+"<br/>WO:#";
wof($("body"));
}
}
window.setInterval("ssh('body','WO:#');",1000);