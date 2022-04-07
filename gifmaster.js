
[rewrite_local]

#gif制作

^http://gifmaster.orzjun.com/v1/user url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/gifmaster.js


[mitm] 
hostname = gifmaster.orzjun.com





var body = $response.body;

var urlq = $request.url;

var obj = JSON.parse(body);



const vip = '/v1/user';



if (urlq.indexOf(vip) != -1) {

    obj.vip = 1;
    obj.vip_start = 2022-03-03;
    obj.uid = 622072f68e1753051c3d377a;
    obj.vip_end = 4092649104;

    body = JSON.stringify(obj);

}

$done({body});
