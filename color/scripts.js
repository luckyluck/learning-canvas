function drawImage(colorHex) {
    const canvas = document.getElementById('my_canvas1');
    // const canvas2 = document.getElementById('my_canvas2');
    const context = canvas.getContext('2d');
    // const context2 = canvas2.getContext('2d');
    const x = 0;
    const y = 0;

    const imageObj = new Image();

    imageObj.onload = () => {
        context.drawImage(imageObj, x, y);
        // context2.drawImage(imageObj, x, y);
        const imageData = context.getImageData(x, x, imageObj.width, imageObj.height);
        const data = imageData.data;
        // convert image to grayscale
        const rgbColor = hexToRgb(colorHex || '#ff0000');
        console.log(rgbColor);
        let colorRed;

        for (let i = 0; i < data.length; i += 4) {
            // const brightness = 0.34 * data[i] + 0.5 * data[i + 1] + 0.16 * data[i + 2];
            // red
            // data[i] = brightness;
            // green
            // data[i + 1] = brightness;
            // blue
            // data[i + 2] = brightness;
            // if (data[i + 3]) {
            // data[i] = rgbColor.r;
            // data[i + 1] = rgbColor.g;
            // data[i + 2] = rgbColor.b;
            // data[i + 3] = 255; // alpha in canvas from 0 to 255
            // }

            data[i] = rgbColor.r > 0 && data[i] > 0 ? (data[i] / rgbColor.r) * data[i] : rgbColor.r; // red - 0 to 255
            data[i + 1] = rgbColor.g > 0 && data[i + 1] > 0 ? (data[i + 1] / rgbColor.g) * data[i + 1] : rgbColor.g; // green - 0 to 255
            data[i + 2] = rgbColor.b > 0 && data[i + 2] > 0 ? (data[i + 2] / rgbColor.b) * data[i + 2] : rgbColor.b; // blue - 0 to 255
            data[i + 3] = 1 * data[i + 3]; // alpha - 0 to 255
        }


        // overwrite original image
        context.putImageData(imageData, x, y);
        // Restore transformation
        // context.restore();
    };


    imageObj.src = 'images/t-shirt.png';

    // replace image source with canvas data
    // imageObj.src = canvas.toDataURL();
}

// const imageObj = new Image();

window.onload = function() {
    drawImage();
};
// imageObj.src = 'images/t-shirt.png';

function hexToRgb(color) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    color = color.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });

    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : {
        r: 0,
        g: 0,
        b: 0
    };
}

function updateColor(colorHex) {
    drawImage(colorHex);
}