window.onload = function () {
    const canvas = document.getElementById('heart-curves');
    const context = canvas.getContext('2d');

    // Right part
    drawBezierCurve(430, 130, 470, 10, 670, 10, 670, 180, 'red', 5);
    drawQuadraticCurve(670, 180, 670, 380, 430, 520, 'red', 5);

    // Left part
    drawBezierCurve(430, 130, 400, 10, 190, 10, 190, 180, 'red', 5);
    drawQuadraticCurve(190, 180, 190, 380, 430, 520, 'red', 5);

    function drawQuadraticCurve(startX, startY, controlX, controlY, endX, endY, curveColor, curveWidth) {
        context.beginPath();
        context.strokeStyle = curveColor;
        context.lineWidth = curveWidth;
        context.moveTo(startX, startY);
        context.quadraticCurveTo(controlX, controlY, endX, endY);
        context.stroke();
    }

    function drawBezierCurve(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY, curveColor, curveWidth) {
        context.beginPath();
        context.strokeStyle = curveColor;
        context.lineWidth = curveWidth;
        context.moveTo(startX, startY);
        context.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY);
        context.stroke();
    }
};
