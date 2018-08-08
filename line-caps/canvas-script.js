window.onload = function () {
    const canvas = document.getElementById('line-caps-canvas');
    const context = canvas.getContext('2d');

    // First line
    context.beginPath(); // reset the context state
    context.lineCap = 'butt';
    context.strokeStyle = 'red'; // color of the line
    context.lineWidth = 5; // line width
    context.moveTo(50, 50); // starting line point
    context.lineTo(250, 50); // ending line point
    context.stroke(); // draws the line

    // Second line
    context.beginPath(); // reset the context state
    context.lineCap = 'round';
    context.strokeStyle = 'blue'; // color of the line
    context.lineWidth = 5; // line width
    context.moveTo(50, 75); // starting line point
    context.lineTo(250, 75); // ending line point
    context.stroke(); // draws the line

    // Second line
    context.beginPath(); // reset the context state
    context.lineCap = 'square';
    context.strokeStyle = 'green'; // color of the line
    context.lineWidth = 5; // line width
    context.moveTo(50, 100); // starting line point
    context.lineTo(250, 100); // ending line point
    context.stroke(); // draws the line
};

