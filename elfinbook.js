
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
    
    
    
    
    
    
    
    body = JSON.stringify(obj);

}

$done({body});
