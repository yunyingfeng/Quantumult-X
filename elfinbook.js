/*
[rewrite_local]

#elfinbook易飞

^https?:\/\/api\.elfinbook\.com\/v4\/user\/detail url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/elfinbook.js

[mitm] 
hostname = api.elfinbook.com

*/



var body = $response.body;
var urlq = $request.url;
var obj = JSON.parse(body);

const vip = '/v4/user/detail';

if (urlq.indexOf(vip) != -1) {

    obj.vip= 1;
    obj.is_trial : 99;
    obj.expire_time : "2029.01.01";
    obj.nickname : "🌈云影风";
    
  
   
    body = JSON.stringify(obj);
}
$done({body});
