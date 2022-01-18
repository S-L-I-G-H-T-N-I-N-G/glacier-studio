var width;
var offsetWidth;
var big = [];
var small = [];

function adjustLayout() {
    width = document.documentElement.clientWidth;
    lastOffsetWidth = offsetWidth;
    offsetWidth = document.documentElement.offsetWidth;
    if (lastOffsetWidth < 600 && 600 <= offsetWidth) adjustToBig();
    else if (offsetWidth < 600 && 600 <= lastOffsetWidth) adjustToSmall();
}
function adjustToBig() {
    console.log("调为大布局");
    for (var i = 0;i < big.length;i++) {
        big[i]();
    }
}
function adjustToSmall() {
    console.log("调为小布局");
    for (var i = 0;i < small.length;i++) {
        small[i]();
    }
}

window.addEventListener("resize", adjustLayout);

window.addEventListener("load",function () {
    adjustLayout();
    if (width < 600) adjustToSmall();
    else adjustToBig();
})