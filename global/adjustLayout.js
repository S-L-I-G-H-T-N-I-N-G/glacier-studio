var width;
var lastInnerWidth;
var big = [];
var small = [];

function adjustLayout() {
    width = document.documentElement.clientWidth;
    if (lastInnerWidth < 600 && 600 <= innerWidth) adjustToBig();
    else if (innerWidth < 600 && 600 <= lastInnerWidth) adjustToSmall();
    lastInnerWidth = innerWidth;
}
function adjustToBig() {
    for (var i = 0;i < big.length;i++) {
        big[i]();
    }
}
function adjustToSmall() {
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