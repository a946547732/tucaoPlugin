init();
//页面加载完成事件
window.onload = async function () {
  //chrome对象存入缓存
  localStorage.setItem(
    "localData",
    JSON.stringify({
      vuejs: chrome.extension.getURL("public/build/vue.global.js"),
    })
  );
  // await timeout(1000);
  // await createjs("public/build/vue.global.js");
  // await timeout(1500);
  await createjs("public/bilibili/js/bilibili.js");
};
//初始化加载
async function init() {
  await createcss("public/bilibili/css/bilibili.css");
  await createjs("public/build/jquery.min.js");
}
//加载js
async function createjs(path, type = "text/javascript") {
  return new Promise((success) => {
    let js = document.createElement("script");
    js.type = type;
    if (path.includes("http")) {
      js.src = path;
    } else {
      js.src = chrome.extension.getURL(path);
    }
    document.body.appendChild(js);
    success();
  });
}
//加载css
async function createcss(path) {
  return new Promise((success) => {
    let css = document.createElement("link");
    css.rel = "stylesheet";
    if (path.includes("http")) {
      css.href = path;
    } else {
      css.href = chrome.extension.getURL(path);
    }
    document.head.appendChild(css);
    success();
  });
}
//timeout
async function timeout(t) {
  return new Promise((success) => {
    setTimeout(() => {
      success();
    }, t);
  });
}

//监听插件请求
chrome.runtime.onMessage.addListener((req) => {
  // console.log(1, req);
});
