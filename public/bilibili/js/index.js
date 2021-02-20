// createcss("outside/bilibili/bilibili.css");
createjs("public/jquery.min.js");
window.onload = function () {
  // createjs("public/jquery.min.js");
  createjs("outside/bilibili/bilibili.js");
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
