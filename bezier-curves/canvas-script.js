window.onload = function () {
    const canvas = document.getElementById('bezier-curves');
    const context = canvas.getContext('2d');

    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.moveTo(200, 250);
    context.bezierCurveTo(200, 10, 50, 150, 400, 250);
    context.stroke();
};

