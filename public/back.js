//当前后台页的js入口
function backjs() {
  //获取当前页信息
  chrome.tabs.getSelected(null, (tab) => {
    chrome.tabs.executeScript(null, {
      code: `
        var kw = document.querySelector("#kw");
        alert(kw.value);
      `,
      // code: `${String(js())}`,
    });
  });
}

//运行的脚本
function js() {
  var kw = document.querySelector("#kw");
  alert(kw.value);
}
