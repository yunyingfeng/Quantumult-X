
[rewrite_local]

#git制作
^http://gifmaster.orzjun.com/v1/user url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/naiyou.js


[mitm] 
hostname = gifmaster.orzjun.com




var body = $response.body;

var urlq = $request.url;

var obj = JSON.parse(body);



const vip = '/v1/user';



if (urlq.indexOf(vip) != -1) {

    obj.data.vip = 1;

    body = JSON.stringify(obj);

}

$done({body});
