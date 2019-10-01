function $(id){return document.getElementById(id);}
function wo_get(variable){
var query = window.location.search.substring(1);
var vars = query.split("&");
for (var i=0;i<vars.length;i++){
var pair = vars[i].split("=");
if(pair[0] == variable){return pair[1];}
}
return(false);
}
path=wo_get("path");
if(path!=""){
$("video").src=path;
}
//选台操作
tv=new Array("http://yztv.wshls.homecdn.com/live/4387.m3u8",
"http://cctvalih5c.v.myalicdn.com/live/cctv6_2/index.m3u8",
"http://live-lt-hls-yf.jstv.com/live/cctv10_1000/online.m3u8",
"https://w1live.livecdn.yicai.com/live/cbn.m3u8","http://mgzb.live.miguvideo.com:8088/wd-hunanhd-350/index.m3u8?msisdn=3FED9BE7AC2EBDE71F1236ADF0AA46AF&mdspid=&spid=699017&netType=0&sid=2201064496&pid=2028597799&timestamp=20190717231119&Channel_ID=H5_&ProgramID=619858170&ParentNodeID=-99&assertID=2201064496&client_ip=121.41.95.185&SecurityKey=20190717231119&promotionId=&mvid=&mcid=&mpid=&encrypt=101546f203cb499b59382d522ada86dc","http://cctvalih5c.v.myalicdn.com/live/cctv2_2/index.m3u8","http://121.31.30.90:8085/ysten-business/live/jinyingkaton/1.m3u8");
tvid=parseInt(3);
function sy(id){

switch(id)
{
//上一台
case "0":
(tvid<=0)?tvid=tv.length-1:tvid=tvid-1;
$("video").src=tv[tvid];
$("tvid").innerText=tvid;
return;

//下一台
case "1":
(tvid>=tv.length-1)?tvid=0:tvid=tvid+1;
$("video").src=tv[tvid];
$("tvid").innerText=tvid;
return;
case "2":
var person=prompt("输入你要观看的电视台，或者输入视频地址","1");
if (person!=null && person!=""){

if(typeof(tv[person])!=="undefined"){
tvid=parseInt(person);
$("video").src=tv[tvid];
$("tvid").innerText=person;
}else{
$("video").src=person;
}
}
return;
//下一台
case "3":
if($("sd").innerText=="暂停"){
$("video").pause();
$("sd").innerText="播放";
}else{
$("video").play();
$("sd").innerText="暂停";
}
return;
}}