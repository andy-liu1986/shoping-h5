export default function () {
  // 设置 rem
  var winScale = function () {
    var nScale = window.innerWidth / 750;
    document.documentElement.style.cssText = 'font-size:' + 60 * nScale + 'px;';
  }
  winScale();
  window.onresize = winScale;

  // 禁止微信调整字体大小
  function banFontSize() {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
      handleFontSize();
    } else {
      if (document.addEventListener) {
        document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
      } else if (document.attachEvent) {
        document.attachEvent("WeixinJSBridgeReady", handleFontSize);
        document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
      }
    }

    function handleFontSize() {
      WeixinJSBridge.invoke('setFontSizeCallback', {
        'fontSize': 0
      });
      WeixinJSBridge.on('menu:setfont', function () {
        WeixinJSBridge.invoke('setFontSizeCallback', {
          'fontSize': 0
        });
      });
    }
  }
  banFontSize();
}