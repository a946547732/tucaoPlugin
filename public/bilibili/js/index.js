init()
window.onload = async function () {
  await createcss("public/bilibili/css/bilibili.css");
  await timeout(1000)
  // await createjs("http://localhost:8080/vue.global.js");
  await createjs("public/build/vue.global.js");
  await timeout(1000)
  await createjs("public/bilibili/js/bilibili.js");
};
async function init(){
  await createjs("public/build/jquery.min.js");
}

async function createjs(path,type="javascript") {
  return new Promise((success) => {
    let js = document.createElement("script");
    js.type = `text/${type}`
    if(path.includes('http')){
      js.src = path;
    }else{
      js.src = chrome.extension.getURL(path);
    }
    document.body.appendChild(js);
    success()
  })
}
async function createcss(path) {
  return new Promise((success) => {
    let css = document.createElement("link");
    css.rel = "stylesheet";
    if(path.includes('http')){
      css.href = path;
    }else{
      css.href = chrome.extension.getURL(path);
    }
    document.head.appendChild(css);
    success()
  })
}

async function timeout(t){
  return new Promise((success) => {
    setTimeout(() => {
      success()
    },t)
  })
}

//监听插件请求
chrome.runtime.onMessage.addListener((req) => {
  // console.log(1, req);
});
