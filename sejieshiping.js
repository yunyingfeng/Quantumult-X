/*
[rewrite_local]

#色界解锁
^https?:\/\/sjapp\.o3aqqc\.work\/user\/(info|fansAndUpAndAttentionCnt)$ url script-response-body https://raw.githubusercontent.com/yunyingfeng/Quantumult-X/main/sejieshiping.js
^https?:\/\/sjapp\.o3aqqc\.work\/mov\/browse url request-header (\r\n)Authorization:.+(\r\n) request-header $1Authorization: 0547064bb9a5557d332023ab513a2e3784e38dc54f844f53cbb804d3a687c48b6c2e670c6aba3e564f$2
^https?:\/\/sjapp\.o3aqqc\.work\/(home\/message\/get|user\/getUserActivity|activityDialog\/getActivityDialogList|banner\/list2\?location=0|game\/programGameList) url reject-200

[mitm] 
hostname = sjapp.o3aqqc.work

*/

var body = $response.body;
var urlq = $request.url;
var objc = JSON.parse(body);

const user = '/user/info';
const info = '/fansAndUp';

if (urlq.indexOf(user) != -1) {
    objc.data = [
      {
        "readLevel": 0,
        "haveExtendInfo": 0,
        "firstRechargeTime": null,
        "subchannelCode": "yyzx000",
        "gameLink": "",
        "todayDownNum": 99,
        "extrViewNumber": 99,
        "rechargeVipState": 1,
        "appCode": "002503",
        "dailyViewNum": 99,
        "myInviteCode": "\u004b\u004d\u0045\u0059\u0059\u0036",
        "inviteCnt": 99,
        "nextLevelNeed": 0,
        "isFree": 0,
        "leftViewNum": 99,
        "vipExpiredDate": "32501976930",
        "isShowBindInviteCode": 0,
        "potato_url": "https:\/\/t.me\/Bpziyuan",
        "state": 1,
        "certSignStatus": 0,
        "vipEndDate": "32501976930",
        "hasCompleteInfo": 0,
        "aliasName": "\ud83c\udf08\u4e91\u5f71\u98ce",
        "ExpiredDays": 9999,
        "foreverVipTitle": "\u6C38\u4E45\u0053\u0056\u0049\u0050",
        "level": 9,
        "totalBalance": 99,
        "appVer": "0",
        "limitDownNum": 99,
        "birth": "",
        "isOfficial": 0,
        "isPaid": 1,
        "isMaxLevel": 1,
        "oldDriver": 1,
        "phone": "666666",
        "name": null,
        "dailyViewShortNum": 99,
        "userType": 2,
        "job": "",
        "isZhenren": 0,
        "nextLevelNum": 0,
        "preferenceCustom": "",
        "gender": 0,
        "hasJoinPotatoGroup": 0,
        "supUserId": 2109061203550001,
        "companion": null,
        "maxInviteCnt": null,
        "userBrowCnt": 0,
        "tagIds": "",
        "icon": "/icon/4.png",
        "title": "\u6559\u6388",
        "pkg": "sj0002",
        "userCode": null,
        "tagNames": "",
        "countryCode": "+1",
        "isZhubo": 1,
        "hasDownloadApplication": 0,
        "leftViewShortNum": 99,
        "channelCode": "03",
        "gameId": "",
        "oriAppVer": "100",
        "userCls": 2,
        "exceedPercent": 0,
        "gmtCreate": "2021-10-05",
        "downloadApplication": 0,
        "userId": 2110050724360001,
        "token": "39992ffa267f811a826f7745d728094d97ba7d2da8d39ada706912c2affc410a",
        "vipLogo": 1,
        "isMcn": 0,
        "joinPotatogroup": 0,
        "appid": "",
        "isUper": 1,
        "isUpload": 1,
        "vcoinLeft": 0,
        "isWanghong": 1,
        "isExpired": 1,
        "hasSign": false
      }
    ];
    body = JSON.stringify(objc);
}

if (urlq.indexOf(info) != -1) {
    objc.data = [
      {
        "likeCnt" : 999999,
        "uploadCnt" : 999999,
        "upedCnt" : 999999,
        "fansCnt" : 999999,
        "attentionCnt" : 999999
      }
    ];
    body = JSON.stringify(objc);
}

$done({ body });
