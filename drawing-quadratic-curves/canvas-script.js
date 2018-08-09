window.onload = function () {
    const canvas = document.getElementById('quadratic-curves');
    const context = canvas.getContext('2d');

    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.moveTo(200, 250);
    context.quadraticCurveTo(500, 110, 400, 250);
    context.stroke();
};

