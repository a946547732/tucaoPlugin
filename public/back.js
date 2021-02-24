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
