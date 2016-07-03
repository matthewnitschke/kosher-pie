# kosher-pie
A knockout js pi chart component. CSS and HTML from [Lea Verou](https://www.smashingmagazine.com/2015/07/designing-simple-pie-charts-with-css/)

# Installation
```html
<script src='/path/to/knockout.js'></script>
<script src='/path/to/kosher-pie.js'></script>
```

# Usage
It's a knockout js component, so add it to you html like so
```html
<kosher-pie params="{ data: [50, 100] }"></kosher-pie>
```

Current parameters:

| Name | Type | Required | Explanation |
|------|------|----------|-------------|
| data | Array\<Number\> | true | values that are represented in the pie chart |
| colors | Array\<String\> |      | the colors of the pie slices |


Please see examples folder for working example
