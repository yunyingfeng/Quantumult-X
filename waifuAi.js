/*************************************

[rewrite_local]
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/waifuAi.js

[mitm]
hostname = api.revenuecat.com

*************************************/


let obj={
  "request_date": "2024-02-10T15:05:48Z",
  "request_date_ms": 1707577548030,
  "subscriber": {
    "entitlements": {},
    "first_seen": "2020-04-10T15:04:23Z",
    "last_seen": "2024-02-10T15:04:23Z",
    "management_url": null,
    "non_subscriptions": {},
    "original_app_user_id": "60933B06-48C5-4B36-B506-6A932C54ECC1",
    "original_application_version": "68",
    "original_purchase_date": "2020-04-10T16:00:22Z",
    "other_purchases": {},
    "subscriptions": {}
  }
}

$done({ body: JSON.stringify(obj), status: 200 });