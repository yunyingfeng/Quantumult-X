
[rewrite_local]

#elfinbook易飞

^https\:\/\/api\.elfinbook\.com url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/elfinbook.js

[mitm] 
hostname = api.elfinbook.com





var body = $response.body;

var urlq = $request.url;

var obj = JSON.parse(body);



const vip = '/v4/user/detail';



if (urlq.indexOf(vip) != -1) {

    obj.data.vip = 1;
    obj.data.expire_time : "2999.01.01";
    obj.data.is_trial : 0,
    obj.data.uid : 2658836,
    obj.data.nickname : "🌈云影风"
    obj.data.expire_description : "尊享无限次OCR等多项特权",
    obj.data.invite_code : "Ue2GnXhkCN",
    obj.data.headimg_url : "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM7yAXdMr7eg6VhdfShXbwqcmib7NR8j2ztRYhs2qAWRjW1Fy13sEWrLv4ibCdRWVB23qxxjict8PBnYVLB5IqMDG4T/132",
    
    
    
    
    body = JSON.stringify(obj);

}

$done({body});
