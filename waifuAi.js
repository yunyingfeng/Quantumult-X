/*************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/waifuAi.js
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/waifuAi.js
[mitm]
hostname = api.revenuecat.com

*************************************/


const yunyingfeng = {};
const yunyingfeng1 = JSON.parse(typeof $response != "undefined" && $response.body || null);

const name = "Premium";
const appid = "net.kaleidoscope.cutout.premium1";

if (typeof $response == "undefined") {
  delete $request.headers["x-revenuecat-etag"];
  delete $request.headers["X-RevenueCat-ETag"];
  yunyingfeng.headers = $request.headers;
} else if (yunyingfeng1 && yunyingfeng1.subscriber) {
  yunyingfeng1.subscriber.subscriptions = chxm1024.subscriber.subscriptions || {};
  yunyingfeng1.subscriber.entitlements = chxm1024.subscriber.entitlements || {};
  const data = {
	"product_identifier": (appid),
	"expires_date": "2099-09-09T09:09:09Z",
	"purchase_date": "2022-09-09T09:09:09Z"
	};
  yunyingfeng1.subscriber.entitlements[(name)] = (data);
  yunyingfeng1.subscriber.subscriptions[(appid)] = {  ...data,	"Author": "yunyingfeng",	"Telegram": "https://t.me/+v2uDI4PIh4BhM2Ix",	"warning": "🈲️仅供学习，禁止转载或售卖🈲️",	"original_purchase_date": "2022-09-09T09:09:09Z",	"store": "app_store",	"ownership_type": "PURCHASED"};
  yunyingfeng.body = JSON.stringify(yunyingfeng1);
}

$done(yunyingfeng);