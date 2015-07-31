cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/org.ssgroup.sope.cordova.baiduNavi/www/baidu.js",
        "id": "org.ssgroup.sope.cordova.baiduNavi.Baidu",
        "clobbers": [
            "somai.baidu"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "org.ssgroup.sope.cordova.baiduNavi": "0.6.1"
}
// BOTTOM OF METADATA
});