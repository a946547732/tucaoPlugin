// 飘落效果(根据四季自动变换)

var now = new Date();
var yyyy = now.getFullYear();
var mm = now.getMonth();
var dd = now.getDate();

var sTermInfo = new Array(
  0,
  21208,
  42467,
  63836,
  85337,
  107014,
  128867,
  150921,
  173149,
  195551,
  218072,
  240693,
  263343,
  285989,
  308563,
  331033,
  353350,
  375494,
  397447,
  419210,
  440795,
  462224,
  483532,
  504758
);
var solarTerm = new Array(
  "小寒",
  "大寒",
  "立春",
  "雨水",
  "惊蛰",
  "春分",
  "清明",
  "谷雨",
  "立夏",
  "小满",
  "芒种",
  "夏至",
  "小暑",
  "大暑",
  "立秋",
  "处暑",
  "白露",
  "秋分",
  "寒露",
  "霜降",
  "立冬",
  "小雪",
  "大雪",
  "冬至"
);
var solarTerms = "";
while (solarTerms == "") {
  var tmp1 = new Date(
    31556925974.7 * (yyyy - 1900) +
      sTermInfo[mm * 2 + 1] * 60000 +
      Date.UTC(1900, 0, 6, 2, 5)
  );
  var tmp2 = tmp1.getUTCDate();
  if (tmp2 == dd) solarTerms = solarTerm[mm * 2 + 1];
  tmp1 = new Date(
    31556925974.7 * (yyyy - 1900) +
      sTermInfo[mm * 2] * 60000 +
      Date.UTC(1900, 0, 6, 2, 5)
  );
  tmp2 = tmp1.getUTCDate();
  if (tmp2 == dd) solarTerms = solarTerm[mm * 2];
  if (dd > 1) {
    dd = dd - 1;
  } else {
    mm = mm - 1;
    if (mm < 0) {
      yyyy = yyyy - 1;
      mm = 11;
    }
    dd = 31;
  }
}

var seasonal = "";

if (
  solarTerms == "立春" ||
  solarTerms == "雨水" ||
  solarTerms == "惊蛰" ||
  solarTerms == "春分" ||
  solarTerms == "清明" ||
  solarTerms == "谷雨"
) {
  // 春
  seasonal = "spring";
} else if (
  solarTerms == "立夏" ||
  solarTerms == "小满" ||
  solarTerms == "芒种" ||
  solarTerms == "夏至" ||
  solarTerms == "小暑" ||
  solarTerms == "大暑"
) {
  // 夏
  seasonal = "summer";
} else if (
  solarTerms == "立秋" ||
  solarTerms == "处暑" ||
  solarTerms == "白露" ||
  solarTerms == "秋分" ||
  solarTerms == "寒露" ||
  solarTerms == "霜降"
) {
  // 秋
  seasonal = "autumn";
} else if (
  solarTerms == "立冬" ||
  solarTerms == "小雪" ||
  solarTerms == "大雪" ||
  solarTerms == "冬至" ||
  solarTerms == "小寒" ||
  solarTerms == "大寒"
) {
  // 冬
  seasonal = "winter";
}

var stop, staticx;
var img = new Image();
console.log("当前节气：" + solarTerms);
// img.src = "http://qiniuimg.longxin.press/autumn.png";
img.src = "http://wuhairui1.gitee.io/resources/image/" + seasonal + ".png";

function Sakura(x, y, s, r, fn) {
  this.x = x;
  this.y = y;
  this.s = s;
  this.r = r;
  this.fn = fn;
}

Sakura.prototype.draw = function (cxt) {
  cxt.save();
  var xc = (40 * this.s) / 4;
  cxt.translate(this.x, this.y);
  cxt.rotate(this.r);
  cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s);
  cxt.restore();
};

Sakura.prototype.update = function () {
  this.x = this.fn.x(this.x, this.y);
  this.y = this.fn.y(this.y, this.y);
  this.r = this.fn.r(this.r);
  if (
    this.x > window.innerWidth ||
    this.x < 0 ||
    this.y > window.innerHeight ||
    this.y < 0
  ) {
    this.r = getRandom("fnr");
    if (Math.random() > 0.4) {
      this.x = getRandom("x");
      this.y = 0;
      this.s = getRandom("s");
      this.r = getRandom("r");
    } else {
      this.x = window.innerWidth;
      this.y = getRandom("y");
      this.s = getRandom("s");
      this.r = getRandom("r");
    }
  }
};

SakuraList = function () {
  this.list = [];
};
SakuraList.prototype.push = function (sakura) {
  this.list.push(sakura);
};
SakuraList.prototype.update = function () {
  for (var i = 0, len = this.list.length; i < len; i++) {
    this.list[i].update();
  }
};
SakuraList.prototype.draw = function (cxt) {
  for (var i = 0, len = this.list.length; i < len; i++) {
    this.list[i].draw(cxt);
  }
};
SakuraList.prototype.get = function (i) {
  return this.list[i];
};
SakuraList.prototype.size = function () {
  return this.list.length;
};

function getRandom(option) {
  var ret, random;
  switch (option) {
    case "x":
      ret = Math.random() * window.innerWidth;
      break;
    case "y":
      ret = Math.random() * window.innerHeight;
      break;
    case "s":
      ret = Math.random();
      break;
    case "r":
      ret = Math.random() * 6;
      break;
    case "fnx":
      random = -0.5 + Math.random() * 1;
      ret = function (x, y) {
        return x + 0.5 * random - 1.7;
      };
      break;
    case "fny":
      random = 1.5 + Math.random() * 0.7;
      ret = function (x, y) {
        return y + random;
      };
      break;
    case "fnr":
      random = Math.random() * 0.03;
      ret = function (r) {
        return r + random;
      };
      break;
  }
  return ret;
}

//开启落花效果
function startSakura() {
  requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame;
  var canvas = document.createElement("canvas"),
    cxt;
  staticx = true;
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.setAttribute(
    "style",
    "position: fixed;left: 0;top: 0;pointer-events: none;z-index: 99;"
  );
  canvas.setAttribute("id", "canvas_sakura");
  document.getElementsByTagName("body")[0].appendChild(canvas);
  cxt = canvas.getContext("2d");
  var sakuraList = new SakuraList();
  for (var i = 0; i < 50; i++) {
    var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny;
    randomX = getRandom("x");
    randomY = getRandom("y");
    randomR = getRandom("r");
    randomS = getRandom("s");
    randomFnx = getRandom("fnx");
    randomFny = getRandom("fny");
    randomFnR = getRandom("fnr");
    sakura = new Sakura(randomX, randomY, randomS, randomR, {
      x: randomFnx,
      y: randomFny,
      r: randomFnR,
    });
    sakura.draw(cxt);
    sakuraList.push(sakura);
  }
  stop = requestAnimationFrame(function () {
    cxt.clearRect(0, 0, canvas.width, canvas.height);
    sakuraList.update();
    sakuraList.draw(cxt);
    stop = requestAnimationFrame(arguments.callee);
  });
}

window.onresize = function () {
  var canvasSnow = document.getElementById("canvas_snow");
  canvasSnow.width = window.innerWidth;
  canvasSnow.height = window.innerHeight;
};

img.onload = function () {
  startSakura();
};

//关闭落花效果
function stopp() {
  if (staticx) {
    var child = document.getElementById("canvas_sakura");
    child.parentNode.removeChild(child);
    window.cancelAnimationFrame(stop);
    staticx = false;
  } else {
    startSakura();
  }
}
