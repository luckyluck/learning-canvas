window.onload = function () {
    const canvas = document.getElementById('curves');
    const context = canvas.getContext('2d');

    const radian = Math.PI / 180;

    // First arc
    context.beginPath();
    context.strokeStyle = 'blue';
    context.lineWidth = 10;
    context.arc(100, 100, 50, 0, 180 * radian, false);
    context.stroke();

    // Second arc
    context.beginPath();
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.arc(300, 200, 50, 45 * radian, 130 * radian, false);
    context.stroke();

    // Third arc
    context.beginPath();
    context.strokeStyle = 'green';
    context.lineWidth = 10;
    context.arc(300, 100, 50, 45 * radian, 130 * radian, true);
    context.stroke();

};

