/**
 * bar.js
 * simple and elegant bar chart library
 * {date} - version
 * {url}
 *
 * Copyright 2018 {name}
 * Released under the MIT License
 * {license url}
 *
 * @param targetId
 * @param width
 * @param height
 * @param data
 * @constructor
 */

'use strict';

function BarChart(targetId, width, height, data) {
    // Base
    const chart = this;

    // Specify configurations
    chart.configureChart(targetId, width, height, data);

    // Pre-operations
    chart.performPreOperations();

    // Draw chart
    chart.drawChart();
}

BarChart.prototype.configureChart = function (targetId, width, height, data) {
    // Base
    const chart = this;

    // Global canvas settings
    chart.setCanvasParameters(targetId, width, height, data);

    // Global chart settings
    chart.setChartParameters();
};

BarChart.prototype.setCanvasParameters = function (targetId, width, height, data) {
    // Base
    const chart = this;

    // Canvas settings
    chart.id = targetId;
    chart.width = width;
    chart.height = height;
    chart.data = data;
};

BarChart.prototype.setChartParameters = function () {
    // Base
    const chart = this;

    // Axis configurations
    chart.axisRatio = 10; // in terms of percentage
    chart.verticalMargin = (chart.height * chart.axisRatio) / 100;
    chart.horizontalMargin = (chart.width * chart.axisRatio) / 100;
    chart.axisColor = '#b1b1b1';
    chart.axisWidth = 0.75;

    // Label configurations
    chart.fontRatio = 3; // in terms of percentage
    chart.fontFamily = 'times';
    chart.fontStyle = 'normal';
    chart.fontWeight = '300';
    chart.fontColor = '#666';
    chart.verticalFontSize = (chart.height * chart.fontRatio) / 100;
    chart.horizontalFontSize = (chart.width * chart.fontRatio) / 100;

    // Guideline configurations
    chart.guidelineColor = '#e5e5e5';
    chart.guidelineWidth = 0.5;
};

BarChart.prototype.performPreOperations = function () {
    // Base
    const chart = this;

    // Create canvas
    chart.createCanvas();

    // Get data
    chart.hadleData();

    // Prepare data
    chart.prepareData();
};

BarChart.prototype.createCanvas = function () {
    // Base
    const chart = this;

    // Create canvas
    const canvas = document.createElement('canvas');
    canvas.id = chart.id + '-' + Math.random();
    canvas.width = chart.width;
    canvas.height = chart.height;

    // Append canvas to target container
    document.getElementById(chart.id).innerHTML = ''; // clean container
    document.getElementById(chart.id).appendChild(canvas); // add canvas as a child into the cleaned container

    // Add canvas to chart object
    chart.canvas = canvas;
    chart.context = canvas.getContext('2d');
};

BarChart.prototype.hadleData = function () {
    // Base
    const chart = this;

    // Data sets
    chart.labels = [];
    chart.values = [];

    // Handle data
    chart.data.forEach(function (item) {
        chart.labels.push(item.label);
        chart.values.push(item.value);
    });
};

BarChart.prototype.prepareData = function () {
    // Base
    const chart = this;

    // Global variables
    chart.itemsNum = chart.data.length;
    chart.maxValue = Math.max.apply(null, chart.values);
    chart.minValue = Math.min.apply(null, chart.values);

    // Axis specifications
    chart.verticalAxisWidth = chart.height - 2 * chart.verticalMargin; // bottom and top margins
    chart.horizontalAxisWidth = chart.width - 2 * chart.horizontalMargin; // left and right margins

    // Label specifications
    chart.verticalUpperBound = Math.ceil(chart.maxValue / 10) * 10;
    chart.verticalLabelFreq = chart.verticalUpperBound / chart.itemsNum;
    chart.horizontalLabelFreq = chart.horizontalAxisWidth / chart.itemsNum;
};

BarChart.prototype.drawChart = function () {
    // Base
    const chart = this;

    // Vertical axis
    chart.drawVerticalAxis();

    // Vertical labels
    chart.drawVerticalLabels();

    // Horizontal axis
    chart.drawHorizontalAxis();

    // Horizontal labels
    chart.drawHorizontalLabels();

    // Horizontal guidelines
    chart.drawHorizontalGuidelines();

    // Vertical guidelines
    chart.drawVerticalGuidelines();
};

BarChart.prototype.drawVerticalAxis = function () {
    // Base
    const chart = this;

    chart.context.beginPath();
    chart.context.strokeStyle = chart.axisColor;
    chart.context.lineWidth = chart.axisWidth;
    chart.context.moveTo(chart.horizontalMargin, chart.verticalMargin);
    chart.context.lineTo(chart.horizontalMargin, chart.height - chart.verticalMargin);
    chart.context.stroke();
};

BarChart.prototype.drawVerticalLabels = function () {
    // Base
    const chart = this;

    // Text specifications
    const labelFont = chart.fontStyle + ' ' + chart.fontWeight + ' ' + chart.verticalFontSize + ' ' + chart.fontFamily;
    chart.context.font = labelFont;
    chart.context.textAlign = 'right';
    chart.context.fontStyle = chart.fontColor;

    // Scale values
    const scaledVerticalLabelFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) * chart.verticalLabelFreq;

    // Draw labels
    for (let i = 0; i <= chart.itemsNum; i++) {
        const labelText = chart.verticalUpperBound - i * chart.verticalLabelFreq;
        const verticalLabelX = chart.horizontalMargin - chart.horizontalMargin / chart.axisRatio;
        const verticalLabelY = chart.verticalMargin + i * scaledVerticalLabelFreq;

        chart.context.fillText(labelText, verticalLabelX, verticalLabelY);
    }
};

BarChart.prototype.drawHorizontalAxis = function () {
    // Base
    const chart = this;

    chart.context.beginPath();
    chart.context.strokeStyle = chart.axisColor;
    chart.context.lineWidth = chart.axisWidth;
    chart.context.moveTo(chart.horizontalMargin, chart.height - chart.verticalMargin);
    chart.context.lineTo(chart.width - chart.horizontalMargin, chart.height - chart.verticalMargin);
    chart.context.stroke();
};

BarChart.prototype.drawHorizontalLabels = function () {
    // Base
    const chart = this;

    // Text specifications
    const labelFont = chart.fontStyle + ' ' + chart.fontWeight + ' ' + chart.verticalFontSize + ' ' + chart.fontFamily;
    chart.context.font = labelFont;
    chart.context.textAlign = 'center';
    chart.context.textBaseline = 'top';
    chart.context.fontStyle = chart.fontColor;

    // Draw labels
    for (let i = 0; i < chart.itemsNum; i++) {
        const horizontalLabelX = chart.horizontalMargin + i * chart.horizontalLabelFreq + chart.horizontalLabelFreq / 2;
        const horizontalLabelY = chart.height - chart.verticalMargin + chart.verticalMargin / chart.axisRatio;

        chart.context.fillText(chart.labels[i], horizontalLabelX, horizontalLabelY);
    }
};

BarChart.prototype.drawHorizontalGuidelines = function () {
    // Base
    const chart = this;

    // Specifications
    chart.context.strokeStyle = chart.guidelineColor;
    chart.context.lineWidth = chart.guidelineWidth;

    // Scale values
    const scaledVerticalLabelFreq = (chart.verticalAxisWidth / chart.verticalUpperBound) * chart.verticalLabelFreq;

    // Draw guidelines
    for (let i = 0; i < chart.itemsNum; i++) {
        // Starting point
        const horizontalGuideLineStartX = chart.horizontalMargin;
        const horizontalGuideLineStartY = chart.verticalMargin + i * scaledVerticalLabelFreq;

        // End point
        const horizontalGuideLineEndX = chart.width - chart.horizontalMargin;
        const horizontalGuideLineEndY = chart.verticalMargin + i * scaledVerticalLabelFreq;

        chart.context.beginPath();
        chart.context.moveTo(horizontalGuideLineStartX, horizontalGuideLineStartY);
        chart.context.lineTo(horizontalGuideLineEndX, horizontalGuideLineEndY);
        chart.context.stroke();
    }
};

BarChart.prototype.drawVerticalGuidelines = function () {
    // Base
    const chart = this;

    // Specifications
    chart.context.strokeStyle = chart.guidelineColor;
    chart.context.lineWidth = chart.guidelineWidth;

    // Draw guidelines
    for (let i = 0; i <= chart.itemsNum; i++) {
        // Starting point
        const verticalGuideLineStartX = chart.horizontalMargin + i * chart.horizontalLabelFreq;
        const verticalGuideLineStartY = chart.height - chart.verticalMargin;

        // End point
        const verticalGuideLineEndX = chart.horizontalMargin + i * chart.horizontalLabelFreq;
        const verticalGuideLineEndY = chart.verticalMargin;

        chart.context.beginPath();
        chart.context.moveTo(verticalGuideLineStartX, verticalGuideLineStartY);
        chart.context.lineTo(verticalGuideLineEndX, verticalGuideLineEndY);
        chart.context.stroke();
    }
};
