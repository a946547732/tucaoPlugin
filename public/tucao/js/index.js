// document.addEventListener("DOMContentLoaded", () => {});
window.onload = function () {
  console.log("加载了tucao插件");
  let js = document.createElement("script");
  js.src = chrome.extension.getURL("outside/tucao/tucao.js"); //插件url
  // js.src = "https://a946547732.github.io/tucaoPlugin/outside_js/tucao.js";
  document.body.appendChild(js);
};
