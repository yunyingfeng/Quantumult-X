
[rewrite_local]

#gif制作

^http://gifmaster.orzjun.com/v1/user/login$ url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/gifmaster.js


[mitm] 
hostname = gifmaster.orzjun.com





var body = $response.body;

var urlq = $request.url;

var obj = JSON.parse(body);



const vip = '/v1/user/login';



if (urlq.indexOf(vip) != -1) {

    obj.data.vip = 1;

    body = JSON.stringify(obj);

}

$done({body});
