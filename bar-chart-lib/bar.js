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

    // Axe configurations
    chart.axeRatio = 10; // in terms of percentage
    chart.verticalMargin = (chart.height * chart.axeRatio) / 100;
    chart.horizontalMargin = (chart.width * chart.axeRatio) / 100;
    chart.axeColor = '#b1b1b1';
    chart.axeWidth = 0.75;

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

    // Axe specifications
    chart.verticalAxeWidth = chart.height - 2 * chart.verticalMargin; // bottom and top margins
    chart.horizontalAxeWidth = chart.height - 2 * chart.horizontalMargin; // left and right margins

    // Label specifications
    chart.verticalUpperBound = Math.ceil(chart.maxValue / 10) * 10;
    chart.verticalLabelFreq = chart.verticalUpperBound / chart.itemsNum;
    chart.horizontalLabelFreq = chart.horizontalAxeWidth / chart.itemsNum;
};
