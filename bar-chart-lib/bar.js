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
