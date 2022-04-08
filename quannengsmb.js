/*
//by=yunyingfneg

[rewrite_local]

# > 全能扫描宝
^https\:\/\/ddstar\.palmmob\.com\/palmmob3_40\/user\/GetUInfo url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/quannengsmb.js

[mitm] 

hostname = ddstar.palmmob.com

*/


let obj = JSON.parse($response.body);
obj = {
  "data" : {
    "id" : "363379",
    "appid" : "40",
    "uuid" : "63A82810-EAEA-4B5D-9958-4BFD96596D29",
    "phone" : "",
    "editoraddr" : "http://oo63.palmmob.com/palmmob3_web/doceditor2.php?fileUrl={0}&user={1}&action={2}&type={3}",
    "channel" : "1",
    "logintime" : "1586354651",
    "inviterid" : "0",
    "wxunionid" : "oUjlA6LKc3eNYPmQgnuH44Rs0-p8",
    "memberinfo" : null,
    "headurl" : "https:\/\/thirdwx.qlogo.cn\/mmopen\/vi_32\/Q3auHgzwzM6a8fUyhJzyzLnZe2nX3brtKKzzeJxTVlx1a2KvfrwAJqIKAWvmnJ4SqvQaqlzOmqMVPnepfbZLf1ILluqtmjPx/132",
    "nickname" : "🌈云影风",
    "invitecode" : "U000058B73",
    "appleid" : "",
    "vipexpiretime" : 32480575451
  },
  "code" : 0
}

$done({body: JSON.stringify(obj)});
