window.onload = function () {
  createjs("public/jquery.min.js");
  createjs("outside/bilibili/bilibili.js");
};

function createjs(path) {
  let js = document.createElement("script");
  js.src = chrome.extension.getURL(path);
  document.body.appendChild(js);
}
