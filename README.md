# kosher-pie
A knockout js pi chart component. CSS and HTML from [Lea Verou](https://www.smashingmagazine.com/2015/07/designing-simple-pie-charts-with-css/)

# Installation
```html
<script src='/path/to/knockout.js'></script>
<script src='/path/to/ko-pi-chart.js'></script>
```

# Usage
It's a knockout js component, so add it to you html like so
```html
<kosher-pie params="{ size: 200, slices: [50, 100] }"></kosher-pie>
```

Current parameters:

| Name | Type | Required | Explanation |
|------|------|----------|-------------|
| size | int  | true     | The size in px of the pie chart |
| slices | array (of integers) | true | values that are represented in the pie chart |
| fill | string |      | the fill color of the chart |
| colors | array (of strings) |      | the colors of the pie slices |

All parameters can be constants
```html
<kosher-pie params="{ size: 200, slices: [50, 100] }"></kosher-pie>
```
or observables
```html
<kosher-pie params="{ size: sizeOfChart, slices: [value1, value2] }"></kosher-pie>
```

Please see examples folder for working example


# Limitations
Only one pie slice is currently availible. I want to change this.
