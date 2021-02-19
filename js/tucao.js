// document.addEventListener("DOMContentLoaded", () => {
//   console.log("加载了插件");
//   let js = document.createElement("script");
//   js.src = chrome.extension.getURL("outside_js/tucao.js"); //插件url
//   document.body.appendChild(js);
// });
window.onload = function () {
  console.log("加载了tucao插件");
  let js = document.createElement("script");
  js.src = chrome.extension.getURL("outside_js/tucao.js"); //插件url
  document.body.appendChild(js);
};
