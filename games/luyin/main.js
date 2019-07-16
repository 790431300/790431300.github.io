var recorder;
var audio = document.querySelector('audio');

function $(id){return document.getElementById(id);}

function startRecording() {
$("start").value="正在录音…";
if(recorder){
recorder.start();
return;
}
HZRecorder.get(function (rec) {
recorder = rec;
recorder.start();
},{error:showError});
}

function obtainRecord(){
if(!recorder){
showError("请先录音");
return;
}
var record = recorder.getBlob();
if(record.duration!==0){
downloadRecord(record.blob);
}else{
showError("请先录音");
}};

function downloadRecord(record){
var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
save_link.href = URL.createObjectURL(record);
var now=new Date;
save_link.download = now.Format("yyyyMMddhhmmss");
fake_click(save_link);
}

function fake_click(obj) {
var ev = document.createEvent('MouseEvents');
ev.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
obj.dispatchEvent(ev);
}
function getStr(){
var now=new Date;
var str= now.toDateString();
}

function stopRecord(){
recorder&&recorder.stop();
};

var msg={};
//发送音频片段
var msgId=1;

function send(){
if(!recorder){
showError("请先录音");
return;
}

var data=recorder.getBlob();
if(data.duration==0){
showError("请先录音");
return;
}

msg[msgId]=data;
recorder.clear();
console.log(data);
var dur=data.duration/10;
var str="<div class='warper'><div id="+msgId+" class='voiceItem'>"+dur+"s</div></div>"
;
$("messages").innerHTML=str;
playRecord(msg[msgId].blob);
msgId++;
}

$(document).on("click",".voiceItem",function(){
alert("/");
var id=$(this)[0].id;
var data=msg[id];
playRecord(data.blob);
})

var ct;
function showError(msg){
$("error").innerHTML=msg;
clearTimeout(ct);
ct=setTimeout(function() {
$("error").innerHTML="";
}, 3000);
}


function playRecord(blob){
$("start").value="继续录音…";

$("audio").src=URL.createObjectURL(blob);
$("audio").play();
if(!recorder){
showError("请先录音");
return;
}};

