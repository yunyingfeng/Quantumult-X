/*
[rewrite_local]

#elfinbook易飞

^https?:\/\/api\.elfinbook\.com\/v4\/user\/detail url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/elfinbook.js

[mitm] 
hostname = api.elfinbook.com

*/



var body = $response.body;


    obj.data["vip"] = "1";
    obj.data["expire_time"] : "2029.01.01";
    obj.data["nickname"] : "🌈云影风";
    
  
    
    
    $done({
    body : JSON.stringify(objc)
});
