// 获取HTML元素
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const generateBtn = document.getElementById("generate");
const svgContainer = document.getElementById("svg-container");

// 点击 "Generate SVG" 按钮时执行生成SVG矩形的函数
generateBtn.addEventListener("click", () => {
  // 获取两种颜色
  const color1Value = color1.value;
  const color2Value = color2.value;

  // 将两种颜色转换为HSL格式
  const color1Hsl = rgbToHsl(hexToRgb(color1Value));
  const color2Hsl = rgbToHsl(hexToRgb(color2Value));

  // 计算颜色差值
  const hueDiff = color2Hsl[0] - color1Hsl[0];
  const satDiff = color2Hsl[1] - color1Hsl[1];
  const lumDiff = color2Hsl[2] - color1Hsl[2];

  // 创建SVG元素
  const svgElement = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svgElement.setAttribute("viewBox", "0 0 500 200");
  svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg");

  // 创建渐变元素
  const gradientElement = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
  gradientElement.setAttribute("id",
