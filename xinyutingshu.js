/*
[rewrite_local]
#新语听书
^https?:\/\/i\.xinyulib\.com\.cn\/api\/querytoken.+ url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/elfinbook.js

[mitm] 
hostname = i.xinyulib.com.cn
*/



var body = $response.body;
var urlq = $request.url;
var obj = JSON.parse(body);

const vip = '/api/querytoken';

if (urlq.indexOf(vip) != -1) {

    obj.vipstartTime= "2020-09-28";
    obj.vipendtime : "2099-09-28";
    obj.trueName : "🌈云影风";
  
    
  
   
    body = JSON.stringify(obj);
}
$done({body});
