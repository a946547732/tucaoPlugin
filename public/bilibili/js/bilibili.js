/**
 * 外部脚本
 */
$("body").append(`<div id="herry"></div>`);
const localData = JSON.parse(localStorage.getItem("localData"));
$("#herry").append(`
  <div id="box">
    <div id="bar" onclick="show_hide()"></div>
    <div id="content" show="false" style="display:none">这里是内容</div>
  </div>
`);
//div显示隐藏
function show_hide() {
  if ($("#content").attr("show") === "true") {
    $("#content").attr("show", false).hide();
  } else {
    $("#content").attr("show", true).show();
  }
}
{
  //div拖动
  const dragBox = function (drag, wrap) {
    function getCss(ele, prop) {
      return parseInt(window.getComputedStyle(ele)[prop]);
    }
    let initX,
      initY,
      dragable = false,
      wrapLeft = getCss(wrap, "left"),
      wrapRight = getCss(wrap, "top");
    drag.addEventListener(
      "mousedown",
      function (e) {
        dragable = true;
        initX = e.clientX;
        initY = e.clientY;
      },
      false
    );
    document.addEventListener("mousemove", function (e) {
      if (dragable === true) {
        let nowX = e.clientX,
          nowY = e.clientY,
          disX = nowX - initX,
          disY = nowY - initY;
        wrap.style.left = wrapLeft + disX + "px";
        wrap.style.top = wrapRight + disY + "px";
      }
    });
    drag.addEventListener(
      "mouseup",
      function (e) {
        dragable = false;
        wrapLeft = getCss(wrap, "left");
        wrapRight = getCss(wrap, "top");
      },
      false
    );
  };
  dragBox(document.querySelector("#bar"), document.querySelector("#box"));
}

//vue
// try {
//   Vue.createApp({
//     data() {
//       return {
//         count: 0,
//         isShow: false,
//       };
//     },
//     //首次渲染后执行
//     mounted() {
//       this.dragBox(
//         document.querySelector("#bar"),
//         document.querySelector("#box")
//       );
//     },
//     methods: {
//       //显示隐藏
//       show_hide() {
//         this.isShow = !this.isShow;
//       },
//       getCss(ele, prop) {
//         return parseInt(window.getComputedStyle(ele)[prop]);
//       },
//       //创建可拖动部件
//       dragBox(drag, wrap) {
//         var initX,
//           initY,
//           dragable = false,
//           wrapLeft = this.getCss(wrap, "left"),
//           wrapRight = this.getCss(wrap, "top");
//         drag.addEventListener(
//           "mousedown",
//           function (e) {
//             dragable = true;
//             initX = e.clientX;
//             initY = e.clientY;
//           },
//           false
//         );
//         document.addEventListener("mousemove", function (e) {
//           if (dragable === true) {
//             var nowX = e.clientX,
//               nowY = e.clientY,
//               disX = nowX - initX,
//               disY = nowY - initY;
//             wrap.style.left = wrapLeft + disX + "px";
//             wrap.style.top = wrapRight + disY + "px";
//           }
//         });
//         drag.addEventListener(
//           "mouseup",
//           function (e) {
//             dragable = false;
//             wrapLeft = getCss(wrap, "left");
//             wrapRight = getCss(wrap, "top");
//           },
//           false
//         );
//       },
//     },
//     //模板
//     template: `
//       <div id="box" :isShow="isShow">
//         <div id="bar" @click="show_hide"></div>
//         <div id="content" :style="'display:'+(isShow?'block':'none')">这里是内容</div>
//       </div>
//     `,
//   }).mount("#herry");
// } catch (err) {
//   console.log("Vue不存在");
// }
