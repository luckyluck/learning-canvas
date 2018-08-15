#bar-js
Lightweight, configurable and simple bar chart library in JavaScript

[![Packagist](https://img.shields.io/packagist/l/doctrine/orm.svg)]()
[![Codacy grade](https://img.shields.io/codacy/grade/e27821fb6289410b8f58338c7e0bc686.svg)]()

## Description
bar.js is a Canvas based simple JavaScript Bar Chart Library to provide a configurable, lightweight and dependency-free experience.

![](https://github.com/luckyluck/learning-canvas/blob/master/bar-chart-lib/bar.png)

## Installation
Download the `bar.min.js` and include it in you project

```html
<script src="bar.min.js"></script>
```

## Usage
To create the bar chart, you need a block level container like a div or p.

```html
<div id="chart">This will be bar chart!</div>
```

Then you can create the BarChart object in your JavaScript file

```js
const chart = new BarChart(chartId, chartWidth, chartHeight, data);
```

### Parameters
 - `chartId - containerId (String)`
 Defines the id of container like "chart"
 
 - `chartWidth (Integer)`
 Defines the width of the chart like 500
 
 - `chartHeight (Integer)`
 Defines the height of the chart like 400
 
 - `data (Objects Array)`
 Defines the data objects. Should have 2 key-value pairs: label and value. Example data:
 
 ```js
const data = [
    { label: 'Jan', value: 123 },
    { label: 'Feb', value: 11 },
    { label: 'March', value: 815 },
    { label: 'April', value: 600 },
    { label: 'May', value: 300 }
];
```

## License
[MIT](LICENSE) &copy; [luckyluck](https://github.com/luckyluck)
