/*
//by=yunyingfneg

[rewrite_local]

# > 全能扫描宝
^https?:\/\/ddstar\.palmmob\.com\/palmmob3_40\/user\/GetUInfo url script-response-body https://raw.githubusercontent.com/yqc007/QuantumultX/master/XinYuLibraryProCrack.js

[mitm] 

hostname = i.xinyulib.com.cn

*/


var objc = JSON.parse($response.body);
objc.data["vipstartTime"] = "2020-09-28";
objc.data["vipendtime"] = "2999-09-28";
objc.data["trueName"] = "\u6D65\u8F7B\u5C18\uD835\uDC36\uD835\uDC5F\uD835\uDC4E\uD835\uDC50\uD835\uDC58";
objc.data["headImg"] = "https:\/\/thirdqq.qlogo.cn\/g?b=oidb&k=iaODNibZcQQTN0QPGShfkKIw&s=640";
$done({
    body : JSON.stringify(objc)
});
