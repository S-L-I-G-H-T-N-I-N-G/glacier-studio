var width;
var big = [];
var small = [];

function adjustLayout() {
    var lastWidth = width;
    width = document.documentElement.clientWidth;
    if (lastWidth < 600 && 600 <= width) adjustToBig();
    else if (width < 600 && 600 <= lastWidth) adjustToSmall();
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

window.addEventListener("load",function () {
    window.addEventListener("resize", adjustLayout);
    adjustLayout();
    if (width < 600) adjustToSmall();
    else adjustToBig();
})