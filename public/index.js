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

//http://chrome.cenchy.com/
