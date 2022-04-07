
[rewrite_local]

#gif制作

^http://gifmaster.orzjun.com/v1/user url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/gifmaster.js


[mitm] 
hostname = gifmaster.orzjun.com




var body = $response.body;
var objc = JSON.parse(body);

objc.data = {
    "vip": 0,
    "vip_start" : "2022-03-03",
    "uid" : "622072f68e1753051c3d377a",
    "vip_end": "2999-09-28"
};

body = JSON.stringify(objc);
$done({ body });
