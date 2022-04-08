/*
//by=yunyingfneg

[rewrite_local]

# > 全能扫描宝
^https?:\/\/ddstar\.palmmob\.com\/palmmob3_40\/user\/GetUInfo url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/quannengsmb.js

[mitm] 

hostname = ddstar.palmmob.com

*/


var objc = JSON.parse($response.body);
objc.data.channel = 2;
objc.data.vipexpiretime = "32480575451";
objc.data.nickname = "\ud83c\udf08\u4e91\u5f71\u98ce";
objc.data.headurl = "https:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/Q3auHgzwzM7yAXdMr7eg6VhdfShXbwqcmib7NR8j2ztRYhs2qAWRjW1Fy13sEWrLv4ibCdRWVB23qxxjict8PBnYVLB5IqMDG4T/132";



$done({
    body : JSON.stringify(objc)
});
