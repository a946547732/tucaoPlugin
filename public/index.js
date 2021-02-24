// //新窗口打开
// $("#newWindow").click((e) => {
//   window.open(chrome.extension.getURL("main.html"));
// });
// //打开后台页
// $("#openback").click((e) => {
//   window.open(chrome.extension.getURL("back.html"));
// });
// //取后台页标题
// $("#getbacktitle").click((e) => {
//   var bg = chrome.extension.getBackgroundPage(); //后台页对象
//   // console.log(bg);
//   alert(bg.document.title);
// });
// //设置后台页标题
// $("#setbacktitle").click((e) => {
//   var title = prompt("新标题", "标题");
//   var bg = chrome.extension.getBackgroundPage();
//   bg.document.title = title;
// });
// //调用后台脚本
// $("#callback_js").click((e) => {
//   var bg = chrome.extension.getBackgroundPage();
//   bg.backjs();
// });

//链接列表
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

//渲染落花状态
function render_lhsz() {
  const lh = localStorage.getItem("lh");
  if (!lh || lh === "false") {
    $("#lh").text("开启");
  } else {
    $("#lh").text("关闭");
  }
}
render_lhsz();
//
$("#lh").click(function () {
  if ($("#lh").text() === "开启") {
    render_lh(true);
  } else {
    render_lh(false);
  }
});

function render_lh(bool) {
  console.log("bool", bool);
  chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
    const { id, url } = tab[0];
    //在B站中
    if (url.includes("bilibili")) {
      localStorage.setItem("lh", bool);
      render_lhsz();
      chrome.tabs.sendMessage(
        id,
        {
          action: "lh",
          lh: bool,
        },
        (res) => {}
      );
    }
  });
}

//http://chrome.cenchy.com/
