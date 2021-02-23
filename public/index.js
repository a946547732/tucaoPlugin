//新窗口打开
$("#newWindow").click((e) => {
  window.open(chrome.extension.getURL("main.html"));
});
//打开后台页
$("#openback").click((e) => {
  window.open(chrome.extension.getURL("back.html"));
});
//取后台页标题
$("#getbacktitle").click((e) => {
  var bg = chrome.extension.getBackgroundPage(); //后台页对象
  // console.log(bg);
  alert(bg.document.title);
});
//设置后台页标题
$("#setbacktitle").click((e) => {
  var title = prompt("新标题", "标题");
  var bg = chrome.extension.getBackgroundPage();
  bg.document.title = title;
});

$("#callback_js").click((e) => {
  var bg = chrome.extension.getBackgroundPage();
  bg.backjs();
});

const links = [
  {
    url: "https://www.jiakaobaodian.com/kaoshi/de2fc81b.html",
    text: "驾考宝典模拟考试",
  },
  {
    url: "https://www.bilibili.com/",
    text: "B站首页",
  },
  {
    url: "http://www.tucao.one/",
    text: "C站首页",
  },
  {
    url: chrome.extension.getURL("back.html"),
    text: "插件设置",
  },
];
const linksEle = links.map((l) => {
  return `
  <a href="${l.url}" target="_blank">${l.text}</a>
  `;
});
$("#link").append(linksEle.join(""));

//http://chrome.cenchy.com/
