/*

// by=yunyingfeng

#剪影恢复会员
[rewrite_local]

^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/jianying.js

[mitm]
hostname = buy.itunes.apple.com,

*/

let objc = JSON.parse($response.body);

obj = {
  "status": 0,
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1000000000,
    "app_item_id": 1000000000,
    "bundle_id": "com.mediaeditor.video",
    "application_version": "437",
    "download_id": 8888888888888,
    "version_external_identifier": 999999999,
    "receipt_creation_date": "2199-12-31 11:57:45 Etc/GMT",
    "receipt_creation_date_ms": "7258046265000",
    "receipt_creation_date_pst": "2199-12-31 11:57:45 America/Los_Angeles",
    "request_date": "2020-10-10 10:10:10 Etc/GMT",
    "request_date_ms": "1602295810000",
    "request_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
    "original_purchase_date": "2020-10-10 10:10:10 Etc/GMT",
    "original_purchase_date_ms": "1602295810000",
    "original_purchase_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
    "original_application_version": "433",
    "in_app": [{
      "quantity": "1",
      "product_id": "yearautorenew",
      "transaction_id": "888888888888888",
      "original_transaction_id": "888888888888888",
      "purchase_date": "2011-11-11 11:11:11 Etc/GMT",
      "purchase_date_ms": "1602295810000",
      "purchase_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
      "original_purchase_date": "2020-10-10 10:10:10 Etc/GMT",
      "original_purchase_date_ms": "1602295810000",
      "original_purchase_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
      "expires_date": "2199-12-31 11:57:45 Etc/GMT",
      "expires_date_ms": "7258046265000",
      "expires_date_pst": "2199-12-31 11:57:45 America/Los_Angeles",
      "web_order_line_item_id": "888888800000000",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "yearautorenew",
    "transaction_id": "888888888888888",
    "original_transaction_id": "888888888888888",
    "purchase_date": "2020-10-10 10:10:10 Etc/GMT",
    "purchase_date_ms": "1602295810000",
    "purchase_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
    "original_purchase_date": "2020-10-10 10:10:10 Etc/GMT",
    "original_purchase_date_ms": "1602295810000",
    "original_purchase_date_pst": "2020-10-10 10:10:10 America/Los_Angeles",
    "expires_date": "2199-12-31 11:57:45 Etc/GMT",
    "expires_date_ms": "7258046265000",
    "expires_date_pst": "2199-12-31 11:57:45 America/Los_Angeles",
    "web_order_line_item_id": "888888800000000",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "subscription_group_identifier": "99999999"
  }],
  "latest_receipt": "5L2c6ICFQGtpbmc=",
  "pending_renewal_info": [{
    "auto_renew_product_id": "yearautorenew",
    "original_transaction_id": "888888800000000",
    "product_id": "yearautorenew",
    "auto_renew_status": "1"
  }]
}
  
  $done({body : JSON.stringify(objc)});
