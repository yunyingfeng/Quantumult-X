[rewrite_local]

# 奶油壁纸

^https://nz-api.duitang.com/account/me url https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/naiyou.js


[mitm] 

hostname = nz-api.duitang.com



var body = $response.body;

var url = $request.url;

var obj = JSON.parse(body);



const vip = '/account/me';



if (url.indexOf(vip) != -1) {

    obj.data.vip = true;

    body = JSON.stringify(obj);

}

$done({body});
