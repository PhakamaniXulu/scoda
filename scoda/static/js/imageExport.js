/**
 * Created by mrade_000 on 25-Jan-17.
 */
src="../../static/vendor/grChartImg/canvg/canvg.js"

function getImgData(chartContainer) {
    var chartArea = chartContainer.children[0];
    var svg = chartArea.innerHTML.substring(chartArea.innerHTML.indexOf("<svg"),
        chartArea.innerHTML.indexOf("</svg>") + 6);
    var doc = chartContainer.ownerDocument;
    var canvas = doc.createElement('canvas');
    canvas.setAttribute('width', chartArea.offsetWidth);
    canvas.setAttribute('height', chartArea.offsetHeight);


    canvas.setAttribute(
        'style',
        'position: absolute; ' +
        'top: ' + (-chartArea.offsetHeight * 2) + 'px;' +
        'left: ' + (-chartArea.offsetWidth * 2) + 'px;');
    doc.body.appendChild(canvas);
    canvg(canvas, svg);
    var imgData = canvas.toDataURL("image/png");
    canvas.parentNode.removeChild(canvas);
    return imgData;
}

function saveAsImg(chartContainer) {
    var imgData = getImgData(chartContainer);

    // Replacing the mime-type will force the browser to trigger a download
    // rather than displaying the image in the browser window.
    download(imgData, "chart.png", 'image/png');
}

function toImg(chartContainer, imgContainer) {
    var doc = chartContainer.ownerDocument;
    var img = doc.createElement('img');
    img.src = getImgData(chartContainer);

    while (imgContainer.firstChild) {
        imgContainer.removeChild(imgContainer.firstChild);
    }
    imgContainer.appendChild(img);
}

