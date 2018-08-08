window.onload = function () {
    const canvas = document.getElementById('line-joins-canvas');
    const context = canvas.getContext('2d');

    /*
    Line Joins -> context.lineJoin = "miter|bevel|round"
     - miter -> default value
     - bevel
     - round
     */

    // first line -> miter
    context.beginPath(); // reset the context state
    context.lineWidth = 20; // line width
    context.lineJoin = 'miter';
    context.moveTo(30, 30); // starting line point
    context.lineTo(130, 30); // ending line point
    context.lineTo(130, 130); // ending line point
    context.lineTo(30, 130); // ending line point
    context.lineTo(30, 230); // ending line point
    context.stroke(); // draws the line

    // second line -> miter
    context.beginPath(); // reset the context state
    context.lineWidth = 20; // line width
    context.strokeStyle = 'red';
    context.lineJoin = 'bevel';
    context.moveTo(60, 60); // starting line point
    context.lineTo(160, 60); // ending line point
    context.lineTo(160, 160); // ending line point
    context.lineTo(60, 160); // ending line point
    context.lineTo(60, 260); // ending line point
    context.stroke(); // draws the line

    // second line -> miter
    context.beginPath(); // reset the context state
    context.lineWidth = 20; // line width
    context.strokeStyle = 'green';
    context.lineJoin = 'round';
    context.moveTo(90, 90); // starting line point
    context.lineTo(190, 90); // ending line point
    context.lineTo(190, 190); // ending line point
    context.lineTo(90, 190); // ending line point
    context.lineTo(90, 290); // ending line point
    context.stroke(); // draws the line
};

