window.onload = function () {
    const canvas = document.getElementById('hello-world-canvas');
    const context = canvas.getContext('2d');

    // Draw line
    context.beginPath(); // reset the context state
    context.strokeStyle = 'red'; // color of the line
    context.lineWidth = 10; // line width
    context.moveTo(30, 70); // starting line point
    context.lineTo(130, 70); // ending line point
    context.stroke(); // draws the line
};

