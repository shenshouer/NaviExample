# 百度地图导航cordova ios 插件使用例子

这是一个整合了百度导航sdk的cordova ios 插件的cordova项目例子

插件参考：https://github.com/shenshouer/org.ssgroup.sope.cordova.baiduNavi

## 使用

由于github限制了上传文件的大小，最大为100MB，而百度导航sdk中的一个框架文件libbaiduNaviSDK.a超过了100MB，本仓库中已经删除了这个文件。所以不能通过cordova plugin add 命令安装。

1、下载本项目到本地
2、下载百度导航sdk并
  
  将libbaiduNaviSDK.a分别放置于plugins/org.ssgroup.sope.cordova.baiduNavi/src/ios/libs/BaiduNaviSDK/目录与
  platforms/ios/navi/plugins/org.ssgroup.sope.cordova.baiduNavi/BaiduNaviSDK/目录下

 如觉得以上两步比较麻烦，提供完整版在百度云盘：http://pan.baidu.com/s/1mgFz3O8

3、在项目根目录下执行
	
	cordova emulate ios

即可打开模拟器运行

## 说明

/www/js/index.js

		var simulateNavi = document.getElementById("simulateNavi");
        var realNavi = document.getElementById("realNavi");
        
        simulateNavi.onclick = function(e){
            alert("开始模拟百度导航");
            somai.baidu.simulateNavi(
                function(success){alert(success);},
                function(error){alert(error);}
            );
        };

        realNavi.onclick = function(e){
            alert("开始真实百度导航");
            var pointsInfo = {
                startPointX: "116.426174",
                startPointY: "40.068405",
                endPointX: "116.444934",
                endPointY: "40.05663"
            };
            somai.baidu.startNavi(
                pointsInfo,
                function(success){alert(success);},
                function(error){alert(error);}
            );
        }
