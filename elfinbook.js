
[rewrite_local]

#elfinbook易飞

^https://api.elfinbook.com/v4/user url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/elfinbook.js

[mitm] 
hostname = api.elfinbook.com





var body = $response.body;

var urlq = $request.url;

var obj = JSON.parse(body);



const vip = '/v4/user';



if (urlq.indexOf(vip) != -1) {

    obj = {
  "message" : "success",
  "data" : {
    "has_password" : 0,
    "is_trial" : 0,
    "vip" : 1,
    "uid" : 2658836,
    "prefix" : null,
    "headimg_url" : "https://thirdwx.qlogo.cn/mmopen/vi_32/Q3auHgzwzM7yAXdMr7eg6VhdfShXbwqcmib7NR8j2ztRYhs2qAWRjW1Fy13sEWrLv4ibCdRWVB23qxxjict8PBnYVLB5IqMDG4T/132",
    "oauth" : [
      {
        "scene" : 1,
        "nickname" : "🌈云影风"
      }
    ],
    "expire_description" : "尊享无限次OCR等多项特权",
    "username" : null,
    "expire_timestamp" : null,
    "subscription" : {

    },
    "nickname" : "🌈云影风",
    "email" : null,
    "invite_code" : "Ue2GnXhkCN",
    "expire_time" : "2999.01.01"
  },
  "code" : "0"
}
    
    body = JSON.stringify(obj);

}

$done({body});

