/*
[rewrite_local]

#elfinbook易飞

^https?:\/\/api\.elfinbook\.com\/v4\/user\/detail url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/elfinbook.js

[mitm] 
hostname = api.elfinbook.com

*/



var objc = JSON.parse($response.body);
objc.data.vip = 1;
objc.data.nickname = "\ud83c\udf08\u4e91\u5f71\u98ce";
objc.data.headimg_url = "https:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/Q3auHgzwzM7yAXdMr7eg6VhdfShXbwqcmib7NR8j2ztRYhs2qAWRjW1Fy13sEWrLv4ibCdRWVB23qxxjict8PBnYVLB5IqMDG4T/132";
objc.data.expire_time = "4070880000";
objc.data.expire_timestamp = "4070880000";


$done({
    body : JSON.stringify(objc)
});
