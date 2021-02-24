createjs("public/vue.global.js");
createjs("public/jquery.min.js");
window.onload = function () {
  createcss("public/bilibili/css/bilibili.css");
  createjs("public/bilibili/js/bilibili.js");
};

function createjs(path) {
  let js = document.createElement("script");
  js.src = chrome.extension.getURL(path);
  document.body.appendChild(js);
}
function createcss(path) {
  let css = document.createElement("link");
  css.rel = "stylesheet";
  css.href = chrome.extension.getURL(path);
  document.head.appendChild(css);
}

//监听插件请求
chrome.runtime.onMessage.addListener((req) => {
  // console.log(1, req);
});
