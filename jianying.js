/*

#剪影恢复会员
[rewrite_local]

^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/jianying.js

[mitm]
hostname = buy.itunes.apple.com,

*/

var objc = JSON.parse($response.body);


    obj.date.web_order_line_item_id = "888888800000000";
    obj.date.original_transaction_id = "88888800000000";
  
  
  $done({
    body : JSON.stringify(objc)
});
