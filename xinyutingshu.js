/*

[rewrite_local]

#新语听书
^https?:\/\/i\.xinyulib\.com\.cn\/api\/querytoken.+ url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/xinyutingshu.js

[mitm] 

hostname = i.xinyulib.com.cn
*/



var objc = JSON.parse($response.body);
objc.data.vipstartTime = "2020-12-12";
objc.data.vipendtime = "2099-12-12";
objc.data.trueName = "\ud83c\udf08\u4e91\u5f71\u98ce";
objc.data.headImg = "https:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/Q3auHgzwzM7yAXdMr7eg6VhdfShXbwqcmib7NR8j2ztRYhs2qAWRjW1Fy13sEWrLv4ibCdRWVB23qxxjict8PBnYVLB5IqMDG4T/132";



$done({
    body : JSON.stringify(objc)
});
