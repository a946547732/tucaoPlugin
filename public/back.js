//当前后台页的js入口
function backjs() {
  //获取当前页信息
  chrome.tabs.getSelected(null, (tab) => {
    chrome.tabs.executeScript(null, {
      code: `
        var kw = document.querySelector("#kw");
        console.log(kw.value);
      `,
    });
  });
}

//右键菜单
chrome.contextMenus.create({
  title: "新增按钮",
  onclick: () => {
    alert("点击新增按钮");
  },
  //匹配网站
  documentUrlPatterns: ["*://*.tucao.one/*"],
  //匹配 可编辑控件/选中内容
  contexts: ["editable", "selection"],
});

$("#lh").click(function () {
  if ($(this).text() == "开启") {
    $(this).text("关闭");
    localStorage.setItem("lh", true);
  } else {
    $(this).text("开启");
    localStorage.setItem("lh", false);
  }
});

//是否开启落花
$("#lh").click((e) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
    console.log(tab);
    // chrome.tabs.sendMessage(
    //   tab[0].id,
    //   {
    //     a: 1,
    //   },
    //   (response) => {}
    // );
  });
});
