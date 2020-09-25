// when you need to grab style of element use computed style over .style

const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const green = document.querySelector(".green");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const yellow = document.querySelector(".yellow");
//const arr = [red, cyan, violet, orange, pink];
const center = document.querySelector(".center");
const colorRgbCode = document.querySelector(".textColor");
console.log(window.getComputedStyle(red).backgroundColor);

getBgColor = (element) => {
  return window.getComputedStyle(element).backgroundColor;
};
console.log(getBgColor(cyan));

// adding eventlisteners
// red.addEventListener("mouseenter", () => {
//   center.style.backgroundColor = getBgColor(red);
// });
// pink.addEventListener("mouseenter", () => {
//   center.style.backgroundColor = getBgColor(pink);
// });

const magicColorChanger = (element) => {
  return element.addEventListener("mouseenter", () => {
    center.style.backgroundColor = getBgColor(element);

    colorRgbCode.innerHTML = "RGB Code :" + getBgColor(element);
  });
};
magicColorChanger(red);
magicColorChanger(cyan);
magicColorChanger(green);
magicColorChanger(violet);
magicColorChanger(orange);
magicColorChanger(pink);
magicColorChanger(yellow);
