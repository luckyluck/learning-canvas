window.onload = function () {
    const canvas = document.getElementById('hello-world-canvas');
    const context = canvas.getContext('2d');

    // Draw line
    context.beginPath(); // reset the context state
    context.moveTo(30, 30); // starting line point
    context.lineTo(80, 80); // ending line point
    context.lineTo(130, 30); // ending line point
    context.lineTo(180, 80); // ending line point
    context.lineTo(230, 30); // ending line point
    context.stroke(); // draws the line

    // // Draw line
    // context.beginPath(); // reset the context state
    // context.moveTo(80, 80); // starting line point
    // context.lineTo(130, 30); // ending line point
    // context.stroke(); // draws the line
    //
    // // Draw line
    // context.beginPath(); // reset the context state
    // context.moveTo(130, 30); // starting line point
    // context.lineTo(180, 80); // ending line point
    // context.stroke(); // draws the line
    //
    // // Draw line
    // context.beginPath(); // reset the context state
    // context.moveTo(180, 80); // starting line point
    // context.lineTo(230, 30); // ending line point
    // context.stroke(); // draws the line
};

