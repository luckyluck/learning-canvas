window.onload = function () {
    const canvas = document.getElementById('pacman');
    const context = canvas.getContext('2d');
    const radian = Math.PI / 180;

    // Body
    context.beginPath();
    context.strokeStyle = 'orange';
    context.fillStyle = 'orange';
    context.moveTo(250, 250);
    context.lineTo(330, 310);
    context.arc(250, 250, 100, 37 * radian, 323 * radian, false);
    context.lineTo(250, 250);
    context.stroke();
    context.fill();

    // Eye
    context.beginPath();
    context.fillStyle = 'black';
    context.strokeStyle = 'black';
    context.arc(250, 200, 10, 0, 360 * radian, false);
    context.stroke();
    context.fill();
};
