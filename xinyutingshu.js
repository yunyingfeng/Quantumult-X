/*
//by：yunyingfeng

[rewrite_local]

#新语听书
^https?:\/\/i\.xinyulib\.com\.cn\/api\/querytoken.+ url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/xinyutingshu.js

[mitm] 

hostname = i.xinyulib.com.cn
*/



var objc = JSON.parse($response.body);
objc.data.vipstartTime = "2020-09-28";
objc.data.vipendtime = "2099-09-28";
objc.data.trueName = "🌈云影风";

$done({
    body : JSON.stringify(objc)
});
