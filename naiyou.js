[rewrite_local]

#奶油壁纸

^https://nz-api.duitang.com/account/me url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/naiyou.js


[mitm] 

hostname = nz-api.duitang.com



var objc = JSON.parse($response.body);
      
    objc = {
  "status" : 1,
  "message" : "success",
  "data" : {
    "id" : 2217662,
    "bindQQ" : false,
    "vip" : true,
    "version" : 1,
    "bindWechat" : true,
    "createAt" : "2022-04-06 17:16:00",
    "avatar" : "",
    "bindApple" : false,
    "updateAt" : "2022-04-06 17:16:00",
    "statics" : {
      "payTotal" : 999999,
      "blogCollectTotal" : 0,
      "blogDownloadTotal" : 0
    },
    "nickname" : "",
    "telephone" : "2",
    "status" : 0,
    "bindPhone" : false
  }
}
        
        

$done({ body : JSON.stringify(objc) });
